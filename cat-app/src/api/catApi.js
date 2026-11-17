const API_URL = "https://api.thecatapi.com/v1/images/search";
const API_KEY = import.meta.env.VITE_CAT_API_KEY;

export async function getCat() {
    const response = await fetch(API_URL, {
        headers: {
            "x-api-key": API_KEY,
        },
    });

    if (!response.ok) {
        throw new Error("猫の画像を取得できませんでした");
    };

    const data = await response.json();
    return data[0];
}