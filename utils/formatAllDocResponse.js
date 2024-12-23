export default function formatAllDocResponse(docs, uniqueArray) {

    const res = uniqueArray.map(c => {
        return {
            section_title: c,
            content: docs.reduce((res, d) => {
                if (d.category == c) {
                    res.push({
                        question: d.question,
                        answer: d.answer,
                        id: d._id
                    })
                }
                return res;
            }, [])
        }
    });
    return res;
}