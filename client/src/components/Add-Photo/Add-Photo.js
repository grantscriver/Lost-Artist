import React, { useEffect } from "react";
import { app } from "../../base";

const db = app.firestore();

function AddPhoto() {
  const crypto = require("crypto");
  const id = crypto.randomBytes(16).toString("hex");
  const [fileUrl, setFileUrl] = React.useState(null);
  const [item, setItem] = React.useState([]);

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL(), console.log(file));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const itemName = e.target.itemName.value;
    if (!itemName || !fileUrl) {
      return;
    }
    db.collection("item")
      .doc(itemName)
      .onSnapshot(function (doc) {
        let source = doc.metadata.hasPendingWrites ? "Local" : "Server";
        let photoData = doc.data();
        sendToDB(photoData);
      });
    await db.collection("item").doc(itemName).set({
      id: id,
      name: itemName,
      pic: fileUrl,
    });
  };

  function sendToDB(data) {
    console.log(data);
  }

  useEffect(() => {
    const fetchItem = async () => {
      const itemCollection = await db.collection("item").get();
      setItem(
        itemCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    fetchItem();
  }, []);

  return (
    <>
      <div className="columns">
        <div className="column is-3">
          <div className="card">
            <div className="card-image">
              <figure className="image is-3by4">
                <img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMQEBUQEQ8SFRUWFxcaEhUVFhUWExcXFRUXFxYYFRgaHiggGRslGxYYITEhJSkrLi4uFyAzODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAQMAwgMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAABAUGAwIB/8QAPRAAAgECBAIHBQQJBQEAAAAAAAECAxEEEiExBUEGEyJRYXGxMjNygZGhssHRFRY0QlJTguHwI2KSovEU/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ANYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmcKw0atVU5NpNO1rXulfn5M6cZwCoTUYttON7u192nsBXgva/AlHD9bmlnUVJrS3JtbX7yLwThqruWZySiltbd3714AVgJGPoxp1ZQi21F2u7X0328SfwXhCrqUpOSSdla2r57ryAqATeLYLqajgm2rJxb3af8Ae5CAAu8dweFPD9cpTbtF2drdpq/LxHBuDwr03OUpp5mtLW0t3oCkBqf1Zp/zKn/X8jli+j1OFOU1Od4ptXy20XkBmwAAAAAAAAAAAAAAAAABI4fVyVYS7pK/ls/sNF0hwuedHxllfk7P0TMqbvDNVYU5vuUvnla/ED3KcZOVL/ar+Urr8Cs6NUerp1HL+Jp/0afmcMJjL46a5O8F/T/4yx4m1Sw9Rrnf6zf9wMbVnmk5c5Nv6s1cp/8AyYWOna0075Sd5fZf6FDwLC9ZXj3R7T+W322NNxGjRq2jVmll1tnUd+8CD0moKdKNWOuXn/tl/e31MuzdU6NOVJ0oyUo2y75rJ7GIrU3GTi902n8tANTxf9i/pp+sTKxm1s2vJs1XF/2L+mn6xMmBruCybwl23tP1ZmcLCdWSpqTvLvbttfU0vBP2P5T9WZbDVnTkpxdmtufgBafq5W74fV/kVVWDjJxe6bT807Fh+nq/8a/4xK6pNybk92235t3YHkAAAAAAAAAAAAAAAAv+F8chSoqnKM21e1krbtrmUAA74bEONSNR8pXf11LXjXGYVqeSCktU3dJaLyfeUYAuOB8Sp0FLMpuUnyStZbbvzK3F1+sqSm/3m38uS+hxAFlwTiKoTbkm4yWtrXutvxOXF8RCrVc4KSTSvdJa7cm/AhAC8x/F4VMP1SU81oq7St2Wr8/AowALzh3GKdOh1UlO/a2St2m7c/EowAAAAAAAAAAAAAAAAAAAA+pX0S8j3Uoyj7UJR7rpr1OnD/e0/jj6ovel3s0/OXogM9ToTkrxhJrwi36HM1XRT3Mvjf3YkDpJw7JLrYrsy9rwl/cCpp0JyV4wk13qLa+w5mr6M/s7+KXojNYXDupUUFvJ2/N/QDnSpSk7Ri2+5Js91sNOGsoSj4tNI1eJxFPB01FR32Std23cmc8HxynVvGaUNP3mnFrn/wCAZIEjHqCqS6p3hy3+mpHAAAAAAAAAAAAAAAAAAAAAAJHD/e0/jj6ovel3s0/OXoii4f72n8cfVF70u9mn5y9EB16Ke5l8b+7E+8IxSxNJ0qmrStLxXJ+Z86Ke5l8b+7EzmDxLpTU47p/Vc0BrODYV0qc6b5SlZ96srMoujf7QvKVv8+pqKGIjUpqcXo1/iZicFieqqxqLk9V3rZ/YBZdKr9cu7IrfVnvh3AVVpxqOo1e+llydi0x+Chi4RlGeq9mS133TR44Xwl0HnnVbsnZaqK729QKDi+AVCaipOV1e7VudiAWHG8WqtZyj7K0j425/UrwAAAAAAAAAAAAAAAAAAAAAD7GTTunZrZrc6VsTOds85SttmbfqcgB2o4qcFaFSUV3JtK5xAA7UsVOCtGpKK7k2kcj4AO1DEzp+xOUe+zseq+NqTVp1JNdzen0I4AAAAAAAAAAAAAAAAAAAAAAAAA74Oip1IwbdpNJ231NF+rNP+ZU/6/kUPCvf0/iXqaTjmAqVXDq5JWzX7TW9rbeTA4/qzT/mVP8Ar+RQ1ME3XdGCbak0r+HNnTH4WrQspzet7Wk3sWnRSlfPUerukn9r/D6AdKHRqCXbqSb8LJfaRuI9HnCLlSk5W3i/a+VtyBxfGyqVZdp2Tair6aaX8y46L4yUlKnJt5bOLerts0BnKEM04x75JfV2NL+rNP8AmVP+v5FRi6Khi8q26yLX9TjL8S46TUpyUMkZvV3ypvkt7AeKnRmFuzVkn4pNfZYocdg5UZ5JfJrZrvRP4Ph66rReWpFX7WbMlbnvuSelrV6a52l9NAM8AAAAAAAAAAAAAAAAAAAAAl8K9/T+JepoOkPEKlFwyNLNmvdJ7Wt6mbwVVQqQm72jJN230J3HuIwruGRSWXNe6S3t4+AETG46dazm07baJbl10Sqq04c7p/VWfovqZs74PEypTU4vVfRrmmB24xhnTrSTWjbcXyabuW/RTDNZqjVk7KPjzb9DtS6Q0pLtxkn3WUl8iNxHpDeLjSTV/wB56W8kBBxlVTxmZbdZBf8AFxj+BoeL8S/+dReTNmb522+Rj8PPLOMnspJv5NMtOO8ThXUFBSWVu90lvbxA0HDsd19POlZ6prez5efIx+PqTlUk6j7Sdn4W5LwJPBeI9RNuV3GS7SW91s/87z5xnFU6tTPTUlddq6S1Wz0fd6AV4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPSg3qk/oeQAAAAAAD1kdr2du+2h5AAAAAAAAAAAAAAJfCvf0/iXqaziXE40HHMpPNe1rcrd78TJ8K9/T+JepqeK8LWIcbzcct9knvb8gPGF4jRxLdPLrbaaWq8DOcXwao1nFbaOPk+X1NFw/g8MPJ1M7bta7sklzM/xrFqrWco+yrJPvtz+rAuulXuI/GvuyMxS9pea9Tb4+lSlBKtbLdWu7K9nz8rkGODwd9HT/wCf9wPPSv3Ufj/BkLo7wxVL1Zq6TtFPZvm34E3pX7qPx/gzpw7TBXW+Sb+faA+VeP0oSyJSaWl4pW+Wp54rgIV6XW07ZrXTX7yW6fiZQ1nRZ3oNPlJ2+iYEDg3GKdGlkkpt3b0Str8y/oY2M6XXJPLaTs7X7LafPwMNVXafm/U1PC/2H+mp96YEfH8ep1KU4KM7yi0rpW1+Z86P8Mjl66ok/wCFPZJfvMzhrsQ7YHT+XH7Ur+rA8/rFRzZbSt/FZW+m9jjx3hsJU+vppXSu7bSj3/iZk1/CNcJZ/wAM18tQMgAgAAAAAAAAAAAEvhXv6fxL1LjpXVlF08smtJXs2v4e4z9Ko4yUouzTun4nXFYydW3WSzWvbRLffZeAHKdWUt5Sfm2zyj4fQNT0q9xH4192RmKXtLzXqd8VxCpVjlnPMk7pWitbNcl4kZMDU9K/dR+P8GeOjOLUoOjLdXsu+L3KLFcQqVVac8yTutIrX5Ijxk07ptNbNbgXtfo1LN2Jxy8r3uvzLKq44PD5U7uzy98pPnYz8eN10rdZ9VFv0IeIryqPNOTk/H8O4Dmavhf7D/TU+9MyZKpcRqxh1cZ2jZq1o7O9+V+bAims4FiI1qHUy3Sytd8eTXp8jJnunUcXmi2mtmtGBdS6NTzWVSOXv1vbyLDilaOHw/VRerjliueu8v8AO8o/05XtbrPnljf0INWrKbzSk23zYHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEjC4SVRTcbdhXa5teB2o8MnKMJXilUbUb35Ju7020HDMb1Km+bUcvc7STafyuTv0tBuGjShUbiktoZMqAr8Pw9zjndSEFfKnJtXa+Wi8T7Q4e5RzOpTgm2ouTtma3tpt4kjhmMhBdqpNdq8oZVKEl89mfHiKNSKjPNBQlNxUUneM5ZreDA4UeH5oubqU4rM46t6tK+lk9NTjVwzjFTzJpylFWvrl5+TuTsJjIKi6fWTheUnpFSvFpKzPEZ0XTVOVSSyzk01C907WvrpsBDnh2oRqXVpOSXf2bXv9TphMDKqpuNuwru/PfReOjJCnRlSjTlUkssp2tC91Jq3PTY6YPiMKMIxjHM8zlJu6t+6rd/Z9QIVPBSlSlVVmouzXPz8tTuuFyzSTnBZVFtu9u3tyOsOIRppqndrrXJJrRwcWnF/UkLidPrKkozlBSjBRajdrLvowK+nw+7l/qU8sbZp3eXXZLTcT4dJOSvHswz3TbUo/7TtCtStOk5zcZNSU8uqkt7xvtqe/0hDPltLq+r6u/71v4refICJR4fKaptNf6jklvpl3bPGKw+S1qkJ3v7L2t3p7EueKpp0oRnUywu3NJKV5Pku488VxcaiilJzkr5puKi2nsrLcDnDh7cFN1KccybipNpvLvysc1hPYvOMVNNpu9lZta6eBOwGOpwglKc2rPNScVKLbv7L5I4Rr0pOip3ywi1NJc8zaXlqAlwp3glUpvrHaNs3LnqtjlWwTVlGcajfKGZvRb2sTJYun18K3WSlaWqyZVGKWijqeK1eEqim8RVb1TahlaVna1n36AVYAAAAAAAAAAk4GnCUss1N39lQtdvzexMqcOhCVRzlJwhl0Vszc9l3aELCV4wvmpKadubTVu5okvil5SzU4uElFOF3oo+zZ73A6Ph0E5TcpOmoRmrJZ3nbUV53TImPw8YOLg24zjmjfda2afzR2/Sbcm3Ti4OKj1d2kox9mz70R8Ziusa7Kioq0Yrkl4gSq2Bpql1ylLLJJQWl8+t0/BWImEwzqSstEtZSe0Ut2yTU4lmi6eRZMqUY39lraSdtXq795HwuMnSvkla9r6J3ttuBNnw6CqS7UurjCM3tmebZLuC4dBtTUpdW4Sm72zrI7OPdu0eKnGJSleUE4uGWUeTXN3Wzujz+k3mTVOKgouHV62cZau7733+AHPG4eEYwqU3LLPNpK2ZOLSa08yGSsZi+sUYqChGN8sU299W23uyKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//2Q=="
                  alt="placeholder"
                />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <form onSubmit={onSubmit}>
                    <input
                      type="file"
                      onChange={onFileChange}
                      accept="image/*"
                    />
                    <input type="text" name="itemName" placeholder="NAME" />
                    <button>Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPhoto;
