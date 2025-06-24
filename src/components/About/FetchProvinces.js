export const fetchProvinces = async ({ setProvinces = () => {} }) => {
  try {
    const response = await fetch(
      "https://cdn.jsdelivr.net/gh/codenoid/Data-Wilayah.js/wilayah.js"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const scriptContent = await response.text();
    const jsonString = scriptContent.match(/const ID_PROVINSI = (\{.*?\});/s);
    if (jsonString && jsonString[1]) {
      const provinceData = JSON.parse(jsonString[1]);
      setProvinces(Object.values(provinceData));
    } else {
      throw new Error("Could not parse province data");
    }
  } catch (error) {
    console.error("Failed to fetch province data:", error);
    setProvinces([
      "Build The Best Team",
      "The Best Place To Work",
      "And A Better World",
      "For Our Community",
    ]);
  }
};
