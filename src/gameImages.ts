import lodash from "lodash.shuffle";

const gameImages: string[] = [
  "https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWFsfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1675716926653-8f4529595012?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW5pbWFsfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWFsfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1666721922432-49f64a5db919?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YW5pbWFsfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1484406566174-9da000fda645?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWFsfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1457140072488-87e5ffde2d77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWFsfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1470093851219-69951fcbb533?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1480554840075-72cbdabbf689?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1486365227551-f3f90034a57c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1488793207478-ff0892419e30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1562569633-622303bafef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1497206365907-f5e630693df0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1555169062-013468b47731?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1445820200644-69f87d946277?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1463852247062-1bbca38f7805?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1470130623320-9583a8d06241?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1489084917528-a57e68a79a1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1587213128862-80345e23a71a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NjZ8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1503301360699-4f60cf292ec8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTQ1fHx8ZW58MHx8fHx8",
];

export const getRandomImg = (): string[] => {
  const shuffledImages = lodash(gameImages);
  return shuffledImages.slice(0, 6);
};
