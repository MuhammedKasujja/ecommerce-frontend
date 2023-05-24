export function useFormData<T extends Record<string, any>>(data: T) {
  const formData = new FormData();
  for (let key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      formData.append(key, data[key as keyof T]);
    }
  }
  return {
    formData,
  };
}
