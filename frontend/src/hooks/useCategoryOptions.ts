import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

export default function useCategoryOptions(fieldValue: string) {
  const [options, setOptions] = useState<string[]>([]);
  const [filteredOptions, setFilteredOptions] = useState<string[]>(options);

  const { data } = useQuery("faqs", {
    cacheTime: 5000,
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:7800/faq/options");
      console.log(data);
      return data;
    },
  });

  useEffect(() => {
    if (data) {
      setOptions(data);
      setFilteredOptions(data);
    }
  }, [data]);

  useEffect(() => {
    updateFilterOptions(fieldValue);
  }, [fieldValue]);

  function updateFilterOptions(inputValue: string) {
    console.log("changed  triggered");
    const trimmedValue = inputValue.trim();
    setFilteredOptions(
      options.filter((o) =>
        o.toLowerCase().includes(trimmedValue.toLowerCase())
      )
    );
  }

  return {
    filteredOptions,
    updateFilterOptions,
  };
}
