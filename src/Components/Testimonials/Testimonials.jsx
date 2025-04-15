import React from 'react';
import './Testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import profilePic1 from '../../img/profile1.jpg';
import profilePic2 from '../../img/profile2.jpg';
import profilePic3 from '../../img/profile3.jpg';
import profilePic4 from '../../img/profile4.jpg';
import profilePic5 from '../../img/profile5.jpeg';
import profilePic8 from '../../img/profile8.jpg';
import profilePic9 from '../../img/profile9.jpg';
import profilePic10 from '../../img/profile10.jpg';
import profilePic11 from '../../img/profile11.jpg';
import profilePic12 from '../../img/profile12.jpg';
import profilePic13 from '../../img/profile13.jpeg';
import profilePic14 from '../../img/profile14.jpg';
import profilePic15 from '../../img/profile15.jpeg';
import profilePic16 from '../../img/profile16.jpg';
import profilePic17 from '../../img/profile17.jpg';
import profilePic18 from '../../img/profile18.jpg';
import profilePic19 from '../../img/profile19.jpeg';
import profilePic20 from '../../img/profile20.jpeg';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';
function Testimonials() {
  SwiperCore.use([Autoplay]);
  const clients = [
    {
      img: profilePic11,
      review:
        'She Is Kripa!.',
      name: 'GN. Kripa Tamang Lo! She Is General Student',
    },
    {
      img: profilePic1,
      review:
        "He Is Roshan!.",
      name: 'Er. Roshan Sahani! He Is Engineering Student',
    },
    {
      img: profilePic2,
      review:
        'He Is Sandip!.',
      name: 'Er. Sandip Kushwaha! He Is Engineering Student',
    },
    {
      img: profilePic3,
      review:
        'He Is Suraj!.',
      name: 'Er. Suraj Paswan! He Is Engineering Student',
    },
    {
      img: profilePic4,
      review:
        'He Is Kadir.',
      name: 'Er. Abdul Kadir Miya Thakurai! He Is Engineering Student',
    },
    {
      img: profilePic13,
      review:
        'He Is Jayram!.',
      name: 'Er. Jayram Sahani! He Is Engineering Student',
    },
    {
      img: profilePic5,
      review:
        'She Is Aava.',
      name: 'Er. Aava Tharuni! She Is Engineering Student',
    },
    {
      img: profilePic8,
      review:
        'She Is Manisha.',
      name: 'Er. Manisha Sahani! She Is Engineering Student',
    },
    {
      img: profilePic9,
      review:
        'She Is Aayushma.',
      name: 'Er. Aayushma Sahani! She Is Engineering Student',
    },
    {
      img: profilePic10,
      review:
        "He Is Gaurav!.",
      name: 'Er. Gaurav Gauro! He Is Engineering Student',
    },
    {
      img: profilePic12,
      review:
        "He Is Bhola!.",
      name: 'Er. Bhola Mahara! He Is Engineering Student',
    },
    {
      img: profilePic14,
      review:
        "He Is Sahas!.",
      name: 'EH. Sahas! He Is Athetical Hacker',
    },
    {
      img: profilePic15,
      review:
        "He Is Rajan!.",
      name: 'ER. Rajan Raura! He Is Engineering Student',
    },
    {
      img: profilePic16,
      name: 'CSE. Pawan Kumawat! He Is Cyber Security Expert',
      review:
        "He Is Pawan! My Best Friend From India Aspiring Cyber Security professional with deep interest in Ethical Hacking, Network Security, and Cyber Defense. Continuously learning and exploring vulnerabilities, secure coding, and digital risk mitigation.",
    },
    {
      img: profilePic17,
      review:
        "He Is Ranjit!.",
      name: 'Dr. Ranjit Sahani! He Is MBBS Student',
    }, 
    {
      img: profilePic18,
      review:
        "He Is Pradip!.",
      name: 'CA. Pradip Sahani! He Is CA',
    },
    {
      img: profilePic19,
      review:
        "He Is Shree Ram!.",
      name: 'Er. Shree Ram Yadav! He Is Engineering Student',
    },
    {
      img: profilePic20,
      review:
        "He Is Bishal!.",
      name: 'Er. Bishal Mahato Tharu! He Is Engineering Student',
    },
  ];
  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>My All </span>
        <span>Lovely </span>
        <span>Friends...</span>
        <div
          className="blur t-blur1"
          style={{ background: 'var(--purple)' }}
        ></div>
        <div className="blur t-blur2" style={{ background: 'skyblue' }}></div>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonials">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
                <span>{client.name}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Testimonials;
