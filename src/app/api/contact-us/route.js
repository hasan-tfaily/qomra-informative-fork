export const POST = async (request) => {
  const token = `Bearer bb3e1343a51f3bd53340b17ddde2a4df6c19192212173f51b0e7312a6b0289ab1fbdd9da9c6c16de4bac74418048152eb6a7ade5ff8ef6987e412e449efda5e20e365218dee516e8e797b77c45f7ba9c97892f5c27c3e74cfe3633b182621d4cf5f805f8ddb139f2ebe1b48e320340d5f52dc56c58b165bc37d2cdf2719dfa0b`;

  try {
    const data = await request.json();
    const response = await fetch(
      "http://137.184.197.76:1337/api/contact-us-forms",
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
