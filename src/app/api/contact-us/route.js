export const POST = async (request) => {
  const token = `Bearer 0ee7bec67809746bdea7ae0fb0fc978937cb95feebcccb961befe8003c08804305be17b0f216496b371f28a3c7430910783ecd7dbcbb3f6f8fe69b0f28ff4c61de9b0eb0cfa767c82a5ec66b07a56ad87641136a078daaea21d0f82c285a7e764513f1c989d70ad1307fb7b5c4a2322772ff4ba9199173eb87c3135b1edd83cb`;

  try {
    const data = await request.json();
    const response = await fetch("http://91.98.36.223/api/contact-us-forms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    return new Response(JSON.stringify(responseData), {
      status: response.status,
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
};
