'use server';
import { redirect } from 'next/navigation';

export const handleFormSubmission = async (formData: string) => {
    redirect(formData);
};