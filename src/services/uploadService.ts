export type PredictResponse = {
  plate_text: string;
  result_path: string;
};
export const uploadImage = async (file: File, userId: string): Promise<PredictResponse> => {
  const formData = new FormData();
  formData.append('image', file);
  formData.append('id_user', userId);

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/predict`, {
    method: 'POST',
    body: formData,
  });
  if (!response.ok) {
    throw new Error('Upload failed');
  }
  return await response.json(); 
};