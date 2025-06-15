const URL_Listing = "https://fakestoreapi.com/products";

const getAPI = async (url) => {
    try {
        const response = await axios.get(url);
        const result = response.data;

        renderData(result);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getAPI(URL_Listing);

const renderData = (data) => {
    const ulHTML = document.querySelector(".ul-js");

    let newHTML = ``;
    data.forEach((item, index) => {
        newHTML += `<li>
                <a href="./detail.html?id=${item.id}">${item.title}</a>
            </li>`;
    });

    ulHTML.innerHTML = newHTML;
}