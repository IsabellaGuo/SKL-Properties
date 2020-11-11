export async function postData(formData) {
  const res = await fetch('/contact/submit', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  // console.log({ data });
  // return data;
}
