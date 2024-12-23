import mongoose from 'mongoose';

export const Faq = mongoose.model('Faq', {
    question: String,
    answer: String,
    category: String
})

export const SuperUser = mongoose.model('superusers', {
    password: String
}, 'superusers')