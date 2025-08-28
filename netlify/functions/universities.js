// netlify/functions/universities.js
import fetch from "node-fetch";

export async function handler(event) {
  try {
    const { name, country } = event.queryStringParameters;

    const queryParts = [];
    if (name && name.trim() !== "") {
      queryParts.push(`name=${encodeURIComponent(name.trim())}`);
    }
    if (country && country.trim() !== "") {
      queryParts.push(`country=${encodeURIComponent(country.trim())}`);
    }
    const queryString = queryParts.length ? `?${queryParts.join("&")}` : "";

    const response = await fetch(
      `http://universities.hipolabs.com/search${queryString}`
    );

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: "Failed to fetch data" }),
      };
    }

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
