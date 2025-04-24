export const POST = async (request) => {
  const token = `Bearer 7db2d45ad9f6a6848f777295af9e4dffd377c598ef569e48c9c1f0a28e9ee749f034039a98c4dd41533ab5ec17235b2fcb41705d4accf271a49fb4bf3773d0851ea41951d2523cb6509b66cbc84d0ad4d15633926e37eb645d70c23aeb9f3e20c3b3845078610fe7fcf089e3d9e9c5a190a2a594f9848c716843e4f269b58add`;

  try {
    const data = await request.json();
    const response = await fetch(
      "http://165.227.100.193/api/contact-us-forms",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(data),
      }
    );

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
