import mongoose from 'mongoose';

export const Faq = mongoose.model('Faq', {
    question: String,
    answer: String,
    category: String
})