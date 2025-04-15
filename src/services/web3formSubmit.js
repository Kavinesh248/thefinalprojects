export const web3FormSubmit = async (e, formRef, toast) => {
  e.preventDefault();

  const formData = new FormData(formRef.current);
  formData.append("access_key", "f025bc40-8155-4c7c-83ec-9e4f89abd397");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      toast.success("Your response was submitted successfully!", {
        style: { fontSize: "1.4rem", padding: "16px" },
      });
      return { success: true };
    } else {
      toast.error("Something went wrong. Try again.");
      return { success: false };
    }
  } catch (err) {
    console.error("Web3Form error:", err);
    toast.error("Error sending message. Please try again.");
    return { success: false };
  }
};
