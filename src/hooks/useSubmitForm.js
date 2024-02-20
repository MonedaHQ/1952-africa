import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { submitFormData } from '@/services/apiForm';

export function useSubmitForm() {
  const { mutate: submitForm, isLoading: isSubmitting } = useMutation({
    mutationFn: (data) => submitFormData(data),
    onSuccess: () => {
      toast.success('Submitted successfully!');
    },
    onError: (err) => toast.error('Failed to submit', err.message),
  });

  return { submitForm, isSubmitting };
}
