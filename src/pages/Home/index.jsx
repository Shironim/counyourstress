import React, { useState } from 'react';
import { Button, Container, Row, Image } from 'react-bootstrap';
import Frustated from "../../images/frustrated@2x.png";
import Lonely from "../../images/lonely@2x.png";
import Sad from "../../images/sad@2x.png";
import Scared from "../../images/scared@2x.png";
import Sick from "../../images/sick@2x.png";
import Happy from "../../images/happy@2x.png";
import Style from "./style.module.css";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <Row>
        <div className='my-5 d-flex justify-content-center'>
          <Image
            className={Style.image}
            src={Frustated}
          >
          </Image>
          <Image
            className={Style.image}
            src={Lonely}
          >
          </Image>
          <Image
            className={Style.image}
            src={Sad}
          >
          </Image>
          <Image
            className={Style.image}
            src={Scared}
          >
          </Image>
          <Image
            className={Style.image}
            src={Sick}
          >
          </Image>
          <Image
            className={Style.image}
            src={Happy}
          >
          </Image>
        </div>
      </Row>
      <div>
        <h3>Tes Tingkat Stres: Mengenal Diri Lebih Dalam</h3>
        <p>
          Tes ini bisa mengukur tingkat stres dalam dirimu. Hasil dari tes ini akan sangat membantu kamu mengetahui keadaan kesehatan mentalmu saat ini.
        </p>
      </div>
      <Link to={'/start'}>
        <Button className='rounded-pill my-5 py-2 px-4' variant="primary">
          Mulai
        </Button>
      </Link>
      <div>
        <h4>Baca panduannya dulu yuk!</h4>
        <ol>
          <li>Gak ada jawaban yang benar atau salah. Isilah dengan jujur sesuai kepribadianmu.</li>
          <li>Santai aja, tes ini gak diberi waktu, kok.</li>
          <li>Cari tempat yang nyaman dan kondusif supaya kamu lebih fokus.</li>
          <li>Jika kamu keluar di tengah tes, maka seluruh proses tes dan jawaban akan hilang.</li>
          <li>Hasil tes bisa kamu dapatkan setelah mengisi semua pertanyaan dengan lengkap.</li>
        </ol>
        <span>Selamat mengisi, ya! :)</span>
      </div>
    </Container>
  )
}
export default Home;
