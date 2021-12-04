const btnGetArtwork = document.querySelector("#getRandomArtWork");
const h1 = document.querySelector("#artwork");

const getRandomID = async () => {
  try {
    const res = await axios.get(
      "https://collectionapi.metmuseum.org/public/collection/v1/objects"
    );
    const objectIDsList = res.data.objectIDs;
    const randomIndex = Math.floor(Math.random() * res.data.total);

    return objectIDsList[randomIndex];
  } catch (e) {
    console.log("ERROR!", e);
  }
};

const fetchArtWork = async (id) => {
  try {
    const res = await axios.get(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
    );
    return res.data;
  } catch (e) {
    console.log("ERROR!", e);
  }
};

btnGetArtwork.addEventListener("click", async () => {
  const randomID = await getRandomID();
  const data = await fetchArtWork(randomID);
  console.log(data);
  h1.innerText = data.title;
});
