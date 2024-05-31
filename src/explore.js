const images = [
    {
        src: 'https://i.pinimg.com/564x/ee/fd/8c/eefd8c9dcd3b11f1524eba5f59d28cfd.jpg',
        src1: 'https://i.pinimg.com/564x/ee/fd/8c/eefd8c9dcd3b11f1524eba5f59d28cfd.jpg',
        src2: 'https://i.pinimg.com/564x/18/63/e8/1863e87411bfac17c3579e39fd6b7ce2.jpg',
        src3: 'https://i.pinimg.com/564x/6a/35/97/6a3597d0bffc667c7b1f44ae9edaa384.jpg',
        src: 'https://i.pinimg.com/564x/6a/35/97/6a3597d0bffc667c7b1f44ae9edaa384.jpg',
        titlecard: 'Dataran Tinggi Dieng',
        title: 'Dataran Tinggi Dieng',
        province:'Banjarnegara, Jawa Tengah',
        description: 'Dataran Tinggi Dieng, terletak di Jawa Tengah, Indonesia, adalah kawasan vulkanik yang memukau dengan ketinggian sekitar 2.000 meter di atas permukaan laut. Dikenal karena suhu sejuknya, Dieng menawarkan pemandangan alam indah seperti Telaga Warna, Kawah Sikidang, dan Bukit Sikunir. Kawasan ini juga memiliki nilai sejarah tinggi dengan adanya candi-candi Hindu kuno seperti Candi Arjuna dan Candi Gatotkaca. Tradisi lokal, seperti Ruwatan Anak Gimbal, menambah daya tarik budaya. Ekonomi Dieng didominasi oleh pertanian hortikultura, terutama kentang dan carica. Akses ke Dieng biasanya melalui perjalanan darat dari kota-kota terdekat seperti Wonosobo, menawarkan pemandangan yang menakjubkan sepanjang jalan.',
        price:'Harga Ticket Masuk : Rp 10.000',
    },    {
        src: 'https://i.pinimg.com/736x/12/b0/db/12b0dbc3d52451e30e47a2cba0c5b63d.jpg',
        src1: 'https://i.pinimg.com/736x/12/b0/db/12b0dbc3d52451e30e47a2cba0c5b63d.jpg',
        src2: 'https://i.pinimg.com/736x/50/5c/bd/505cbdb68eb97e7b0b8570bac81768e9.jpg',
        src3: 'https://i.pinimg.com/564x/6c/85/59/6c8559a3f6b640502ad165a6cf5fd171.jpg',
        src: 'https://i.pinimg.com/564x/6c/85/59/6c8559a3f6b640502ad165a6cf5fd171.jpg',
        titlecard: 'Rawa Pening',
        title: 'Rawa Pening',
        province:'Semarang, Jawa Tengah',
        description: 'Rawa Pening adalah danau alami yang terletak di dataran tinggi antara Gunung Merbabu dan Gunung Ungaran, di Kabupaten Semarang, Jawa Tengah. Danau ini dikenal dengan keindahan alamnya yang menawan, air yang tenang, dan keberagaman flora dan fauna. Di sekeliling danau, terdapat sawah dan perkampungan yang menambah keindahan panorama. Rawa Pening juga menjadi tempat favorit untuk aktivitas perahu tradisional, memancing, dan menikmati ketenangan alam. Wisatawan bisa menyewa perahu untuk mengelilingi danau dan melihat langsung kehidupan masyarakat setempat yang bergantung pada danau ini.',
        price:'Harga Ticket Masuk : Rp 2.500',
    },    {
        src: 'https://i.pinimg.com/736x/73/b7/74/73b774abc489e356aa4613820a356dc2.jpg',
        src1: 'https://i.pinimg.com/736x/73/b7/74/73b774abc489e356aa4613820a356dc2.jpg',
        src2: 'https://i.pinimg.com/564x/21/a5/8e/21a58e12d8c2eb326796bab2c466c2a3.jpg',
        src3: 'https://i.pinimg.com/564x/de/e1/1e/dee11e09a75063053e691bd0b60a5bec.jpg',
        src: 'https://i.pinimg.com/564x/de/e1/1e/dee11e09a75063053e691bd0b60a5bec.jpg',
        titlecard: 'Gunung Merbabu',
        title: 'Gunung Merbabu',
        province:'Boyolali, Jawa Tengah',
        description: ' Gunung Merbabu adalah gunung berapi tipe stratovolcano yang terletak di Jawa Tengah dengan ketinggian sekitar 3.145 meter. Gunung ini menawarkan beberapa jalur pendakian yang menantang namun mempesona, seperti jalur Selo, Cunthel, dan Wekas. Di sepanjang pendakian, pendaki akan disuguhi pemandangan hutan pegunungan yang lebat, padang rumput luas, dan berbagai flora dan fauna yang eksotis. Dari puncak Merbabu, pendaki dapat menikmati pemandangan spektakuler yang mencakup gunung-gunung di sekitarnya, seperti Gunung Merapi, Gunung Lawu, dan Gunung Sindoro-Sumbing, serta panorama kota-kota di bawahnya.',
        price:'Harga Ticket Masuk : Rp 10.000',
    },    {
        src: 'https://c.inilah.com/reborn/2023/08/1/0412_021656_a9f1_inilah_com_c91a936a1a.jpg',
        src1: 'https://c.inilah.com/reborn/2023/08/1/0412_021656_a9f1_inilah_com_c91a936a1a.jpg',
        src2: 'https://i.pinimg.com/564x/8b/ba/f7/8bbaf7d6b6a1fbd36619ed2f7a9e6547.jpg',
        src3: 'https://i.pinimg.com/564x/6a/45/11/6a4511f34c57e0a4efd352aa9a08f451.jpg',
        src: 'https://i.pinimg.com/564x/6a/45/11/6a4511f34c57e0a4efd352aa9a08f451.jpg',
        title: 'Pantai Menganti',
        titlecard: 'Pantai Menganti',
        province:'Kabupaten Kebumen, Jawa Tengah',
        description: 'Pantai Menganti terletak di Kebumen, Jawa Tengah, dan dikenal sebagai salah satu pantai terindah di kawasan tersebut. Pantai ini memiliki pasir putih yang lembut dan air laut yang jernih berwarna biru. Dikelilingi oleh perbukitan hijau yang menambah keindahan alamnya, Pantai Menganti menawarkan suasana yang tenang dan damai, cocok untuk bersantai dan menikmati pemandangan alam. Selain itu, pantai ini juga memiliki batu karang besar yang menambah keunikan dan keindahan panoramanya. Pengunjung dapat menikmati aktivitas seperti berenang, memancing, atau hanya berjalan-jalan di tepi pantai.',
        price:'Harga Ticket Masuk : Rp 20.000',
    },    {
        src: 'https://i.pinimg.com/564x/6c/68/98/6c68983e462d0c21e2faf21d471ac7e0.jpg',
        src1: 'https://i.pinimg.com/564x/6c/68/98/6c68983e462d0c21e2faf21d471ac7e0.jpg',
        src2: 'https://i.pinimg.com/564x/66/8b/be/668bbea40680d960e51100a817d341ec.jpg',
        src3: 'https://i.pinimg.com/564x/c6/71/38/c67138d0f6ce602a41040620839c0063.jpg',
        src: 'https://i.pinimg.com/564x/c6/71/38/c67138d0f6ce602a41040620839c0063.jpg',
        title: 'Brown Canyon',
        titlecard: 'Brown Canyon',
        province:'Semarang, Jawa Tengah',
        description: 'Brown Canyon, yang terletak di daerah Semarang, Jawa Tengah, awalnya adalah lokasi penambangan tanah dan batu yang kini berubah menjadi destinasi wisata unik. Tebing-tebing batu yang tinggi dan pemandangan alam yang eksotis memberikan kesan seperti berada di Grand Canyon versi mini. Proses penambangan yang berlangsung selama bertahun-tahun menciptakan formasi batuan yang menarik dan dramatis. Wisatawan sering datang ke Brown Canyon untuk berfoto dengan latar belakang tebing batu yang megah dan menikmati pemandangan yang jarang ditemukan di tempat lain.',
        price:'Harga Ticket Masuk : Gratis',
    },    {
        src: 'https://i.pinimg.com/564x/5f/aa/2b/5faa2b86c1a0585b76df0b5d9d65432d.jpg',
        src1: 'https://i.pinimg.com/564x/5f/aa/2b/5faa2b86c1a0585b76df0b5d9d65432d.jpg',
        src2: 'https://i.pinimg.com/736x/4c/4f/bb/4c4fbb8d097a058fe54e7ebf766f36aa.jpg',
        src3: 'https://i.pinimg.com/736x/01/11/ee/0111eecdd96e468b1885a202268eb737.jpg',
        src: 'https://i.pinimg.com/736x/01/11/ee/0111eecdd96e468b1885a202268eb737.jpg',
        title: 'Gunung Merapi',
        titlecard: 'Gunung Merapi',
        province:'Boyolali, Jawa Tengah',
        description: 'Gunung Merapi adalah salah satu gunung berapi paling aktif di Indonesia, terletak di perbatasan Jawa Tengah dan Yogyakarta. Dengan ketinggian sekitar 2.930 meter, Merapi telah mengalami banyak erupsi besar yang membentuk lanskap vulkanik yang dramatis. Erupsi Merapi terkenal dengan letusan piroklastiknya yang berbahaya, namun juga menciptakan keindahan alam yang luar biasa. Area sekitar Merapi memiliki tanah yang subur, menjadikannya lokasi yang ideal untuk pertanian. Selain itu, terdapat banyak wisata edukasi dan museum vulkanologi yang memberikan informasi mendalam tentang aktivitas vulkanik dan sejarah erupsi Merapi.',
        price:'Harga Ticket Masuk : Rp 35.000',
    },    {
        src: 'https://i.pinimg.com/564x/ae/39/80/ae3980f760a12551374ea1ac5cd12ce0.jpg',
        src1: 'https://i.pinimg.com/564x/ae/39/80/ae3980f760a12551374ea1ac5cd12ce0.jpg',
        src2: 'https://i.pinimg.com/564x/dc/bb/27/dcbb27af830d284fa716aa270aae458a.jpg',
        src3: 'https://asset.kompas.com/crops/tgoiJuC4iGteP5AhBzCXlFWfd58=/0x0:1620x1080/750x500/data/photo/2021/04/08/606e43396b996.jpg',
        src: 'https://asset.kompas.com/crops/tgoiJuC4iGteP5AhBzCXlFWfd58=/0x0:1620x1080/750x500/data/photo/2021/04/08/606e43396b996.jpg',
        title: 'Air Terjun Curug Lawe Benowo Kalisidi',
        titlecard: 'Air Terjun Curug Lawe Benowo Kalisidi',
        province:'Semarang, Jawa Tengah',
        description: 'Tersembunyi di keindahan alam Jawa Tengah, Air Terjun Lawei menawarkan pengalaman yang memukau bagi para pengunjung yang mencari ketenangan dan keindahan alam yang menakjubkan. Terletak di Kabupaten Wonosobo, air terjun ini memiliki pesona yang memikat dengan airnya yang jernih yang jatuh dari ketinggian tebing, menciptakan gemuruh yang menenangkan dan semilir angin yang menyegarkan. Air Terjun Lawei dikelilingi oleh pepohonan hijau yang lebat, menambah kesan sejuk dan asri. Pengunjung dapat menikmati suasana alami yang damai sambil mendengarkan suara gemericik air dan merasakan semilir angin yang menyegarkan.',
        price:'Harga Ticket Masuk : Rp 5.000',
    },    {
        src: 'https://i.pinimg.com/564x/23/02/76/2302767dd6c18567ca200cc29d5ba149.jpg',
        src1: 'https://i.pinimg.com/564x/23/02/76/2302767dd6c18567ca200cc29d5ba149.jpg',
        src2: 'https://i.pinimg.com/564x/6a/16/43/6a1643a69010d9d37c0781db88d5848c.jpg',
        src3: 'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/467/2024/05/16/Gunung-Slamet-ditutup-3906604267.jpg',
        src: 'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/467/2024/05/16/Gunung-Slamet-ditutup-3906604267.jpg',
        title: 'Gunung Slamet',
        titlecard: 'Gunung Slamet',
        province:'Brebes, Jawa Tengah',
        description: 'Gunung Slamet adalah gunung tertinggi di Jawa Tengah, dengan ketinggian sekitar 3.428 meter. Gunung ini merupakan gunung berapi aktif dan menawarkan jalur pendakian yang cukup menantang bagi para pendaki. Dari puncak Gunung Slamet, pendaki dapat menikmati pemandangan yang menakjubkan dari pegunungan dan dataran di sekitarnya. Jalur pendakian melalui Bambangan merupakan yang paling populer, melewati hutan tropis yang lebat dan padang rumput luas. Gunung Slamet juga dikenal dengan kawah aktifnya yang terus-menerus mengeluarkan asap.',
        price:'Harga Ticket Masuk : Rp 20.000',
    },    {
        src: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Pantai_tanjung_gelam_Taman_Nasional_Karimunjawa.jpg',
        src1: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Pantai_tanjung_gelam_Taman_Nasional_Karimunjawa.jpg',
        src2: 'https://i.pinimg.com/564x/38/ee/b9/38eeb9886ceb7b60635b65fb51e3d8f9.jpg',
        src3: 'https://i.pinimg.com/564x/b7/92/df/b792df8afdde4b6f7655cd4e2f17d7e8.jpg',
        src: 'https://i.pinimg.com/564x/b7/92/df/b792df8afdde4b6f7655cd4e2f17d7e8.jpg',
        title: 'Pantai Tanjung Gelam',
        titlecard: 'Pantai Tanjung Gelam',
        province:'Jepara, Jawa Tengah',
        description: 'Pantai Tanjung terletak di Kabupaten Jepara, Jawa Tengah, dan menawarkan pemandangan pantai yang indah dengan pasir putih dan air laut yang jernih. Pantai ini masih relatif sepi dan menawarkan suasana tenang dan damai, cocok untuk mereka yang ingin bersantai jauh dari keramaian. Selain menikmati keindahan pantai, pengunjung juga dapat melakukan berbagai aktivitas seperti berenang, snorkeling, atau sekadar berjalan-jalan menikmati pemandangan. Keindahan alam sekitar dan pepohonan kelapa yang rindang menambah pesona Pantai Tanjung.',
        price:'Harga Ticket Masuk : Rp 30.000',
    },    {
        src: 'https://cdn.idntimes.com/content-images/community/2022/01/15035694-530047617193721-7296532837514084352-n-9cde86371d7fc78c91ae80a6ffab250e-5bdeddb332a99fa043d0163eee95d3a4_600x400.jpg',
        src1: 'https://cdn.idntimes.com/content-images/community/2022/01/15035694-530047617193721-7296532837514084352-n-9cde86371d7fc78c91ae80a6ffab250e-5bdeddb332a99fa043d0163eee95d3a4_600x400.jpg',
        src2: 'https://cdn.idntimes.com/content-images/community/2022/01/87657594-200476381031317-6000889457213354977-n-9cde86371d7fc78c91ae80a6ffab250e-c8e9250bdb313772477247678c0ce734.jpg',
        src3: 'https://visitjawatengah.jatengprov.go.id/assets/images/e277c303-945d-42ef-a2ee-c7d6b58cbf6c.jpg',
        src: 'https://visitjawatengah.jatengprov.go.id/assets/images/e277c303-945d-42ef-a2ee-c7d6b58cbf6c.jpg',
        title: 'Pantai Suwuk',
        titlecard: 'Pantai Suwuk',
        province:'Kabupaten Kebumen, Jawa Tengah',
        description: 'Pantai Suwuk terletak di Kabupaten Kebumen, Jawa Tengah. Pantai ini memiliki pemandangan laut yang luas dengan ombak yang cukup besar, serta area bermain yang aman untuk anak-anak. Di sepanjang pantai, terdapat deretan warung yang menjual makanan dan minuman khas pantai. Selain itu, Pantai Suwuk juga dikenal dengan pemandangan matahari terbenamnya yang indah, menjadikannya tempat favorit bagi para fotografer dan pengunjung yang ingin menikmati senja. Pantai ini juga menawarkan suasana yang tenang dan nyaman untuk bersantai.',
        price:'Harga Ticket Masuk : Rp 5.000',
    },    {
        src: 'https://i.pinimg.com/564x/f3/26/d7/f326d7f7395df495741cce06250a1921.jpg',
        src1: 'https://i.pinimg.com/564x/f3/26/d7/f326d7f7395df495741cce06250a1921.jpg',
        src2: 'https://i.pinimg.com/736x/e2/99/59/e2995925a0f3aa37e8e0ec1a5ba7616d.jpg',
        src3: 'https://i.pinimg.com/736x/69/c5/11/69c511a65dac7c926758e04f2912b5a9.jpg',
        src: 'https://i.pinimg.com/736x/69/c5/11/69c511a65dac7c926758e04f2912b5a9.jpg',
        title: 'Lawang Sewu',
        titlecard: 'Lawang Sewu',
        province:'Semarang, Jawa Tengah',
        description: 'Lawang Sewu adalah bangunan bersejarah yang terletak di Semarang, Jawa Tengah. Bangunan ini dulunya merupakan kantor pusat perusahaan kereta api Hindia Belanda. Nama Lawang Sewu yang berarti "seribu pintu" berasal dari banyaknya pintu dan jendela yang terdapat di bangunan ini. Arsitektur kolonial yang megah dan misterius menarik banyak wisatawan. Lawang Sewu juga dikenal dengan kisah-kisah mistisnya, menjadikannya tempat populer untuk tur sejarah dan horor. Selain itu, bagian dalam bangunan menyimpan banyak artefak dan pameran tentang sejarah perkeretaapian di Indonesia.',
        price:'Harga Ticket Masuk : Rp 10.000',
    },    {
        src: 'https://i.pinimg.com/564x/a1/3b/60/a13b601671f8152bc8de6508323c54a3.jpg',
        src1: 'https://i.pinimg.com/564x/a1/3b/60/a13b601671f8152bc8de6508323c54a3.jpg',
        src2: 'https://i.pinimg.com/564x/7b/1b/b5/7b1bb5f2103c900c560e06d7a2dc9df6.jpg',
        src3: 'https://i.pinimg.com/736x/f8/4f/1c/f84f1c9890bfb096a3cf1f2160e6a658.jpg',
        src: 'https://i.pinimg.com/736x/f8/4f/1c/f84f1c9890bfb096a3cf1f2160e6a658.jpg',
        title: 'Klenteng Sam Poo Kong',
        titlecard: 'Klenteng Sam Poo Kong',
        province:'Semarang, Jawa Tengah',
        description: 'Klenteng Sam Po Kong adalah klenteng bersejarah yang terletak di Semarang, Jawa Tengah. Klenteng ini didedikasikan untuk Laksamana Cheng Ho, seorang penjelajah Tiongkok yang legendaris. Bangunan klenteng ini memiliki arsitektur khas Tiongkok dengan atap berwarna merah mencolok dan ornamen-ornamen yang indah. Sam Po Kong bukan hanya tempat ibadah, tetapi juga situs sejarah dan budaya yang menarik banyak pengunjung. Setiap tahun, klenteng ini mengadakan berbagai acara dan festival budaya yang menarik.',
        price:'Harga Ticket Masuk : Gratis',
    },    {
        src: 'https://i.pinimg.com/564x/51/50/d1/5150d102fab7241ade899e50b1858289.jpg',
        src1: 'https://i.pinimg.com/564x/51/50/d1/5150d102fab7241ade899e50b1858289.jpg',
        src2: 'https://i.pinimg.com/564x/48/e3/37/48e3378bf06056e8248e2613e2918e88.jpg',
        src3: 'https://i.pinimg.com/736x/41/d6/3b/41d63ba3378b5b142fd893f2a7952e4d.jpg',
        src: 'https://i.pinimg.com/736x/41/d6/3b/41d63ba3378b5b142fd893f2a7952e4d.jpg',
        title: 'Candi Borobudur',
        titlecard: 'Candi Borobudur',
        province:'Magelang, Jawa Tengah ',
        description: 'Candi Borobudur adalah candi Buddha terbesar di dunia, terletak di Magelang, Jawa Tengah. Dibangun pada abad ke-9 oleh Dinasti Syailendra, candi ini terkenal dengan stupa-stupa besar dan relief-relief yang menggambarkan ajaran Buddha. Struktur candi yang megah dan detail arsitekturnya mencerminkan kemajuan peradaban kuno. Borobudur juga dikenal sebagai tempat ziarah dan meditasinya yang mendalam, menawarkan pengalaman spiritual dan historis yang luar biasa bagi pengunjung.',
        price:'Harga Ticket Masuk : Rp 455.000',
    },    {
        src: 'https://i.pinimg.com/564x/d6/c7/98/d6c798c3011d6c107b43b5ddd9daf6ff.jpg',
        src1: 'https://i.pinimg.com/564x/d6/c7/98/d6c798c3011d6c107b43b5ddd9daf6ff.jpg',
        src2: 'https://i.pinimg.com/564x/d3/08/9d/d3089dbb8920d92846dfbb4efc8e1646.jpg',
        src3: 'https://i.pinimg.com/564x/92/28/2e/92282eec0f2540856f77e52f6c8481a6.jpg',
        src: 'https://i.pinimg.com/564x/92/28/2e/92282eec0f2540856f77e52f6c8481a6.jpg',
        titlecard: 'Museum Kereta Api Ambarawa',
        title: 'Museum Kereta Api Ambarawa',
        province:'Semarang, Jawa Tengah ',
        description: 'Museum Kereta Api Ambarawa terletak di Ambarawa, Jawa Tengah, dan menyimpan berbagai koleksi lokomotif dan gerbong kereta api kuno. Bangunan museum ini dulunya adalah stasiun kereta api yang dibangun pada masa kolonial Belanda. Selain melihat koleksi kereta api bersejarah, pengunjung juga dapat menikmati perjalanan dengan kereta wisata yang ditarik oleh lokomotif uap, mengelilingi area pedesaan yang indah dan menawarkan pengalaman nostalgia yang unik.',
        price:'Harga Ticket Masuk : Rp 20.000',
    },    {
        src: 'https://i.pinimg.com/564x/ff/1b/53/ff1b53addd4c2fa467a8d9a558f47b9c.jpg',
        src1: 'https://i.pinimg.com/564x/ff/1b/53/ff1b53addd4c2fa467a8d9a558f47b9c.jpg',
        src2: 'https://i.pinimg.com/564x/fd/d9/ef/fdd9ef0bd5b6d34829552b46899d46ca.jpg',
        src3: 'https://i.pinimg.com/564x/03/6d/28/036d28c620cad9876ad22fd2fe968bd2.jpg',
        src: 'https://i.pinimg.com/564x/03/6d/28/036d28c620cad9876ad22fd2fe968bd2.jpg',
        title: 'Keraton Surakarta',
        titlecard: 'Keraton Surakarta',
        province:'Surakarta, Jawa Tengah',
        description: 'Keraton Surakarta, atau dikenal juga sebagai Keraton Kasunanan Surakarta, adalah istana resmi Kesultanan Surakarta yang terletak di kota Solo, Jawa Tengah. Istana ini masih berfungsi sebagai pusat kebudayaan dan tradisi Jawa. Di dalamnya, pengunjung dapat melihat koleksi artefak bersejarah, seperti senjata, perhiasan, dan pakaian kerajaan. Selain itu, Keraton juga sering mengadakan berbagai upacara adat dan pertunjukan seni tradisional yang memperkenalkan budaya Jawa kepada para wisatawan.',
        price:'Harga Ticket Masuk : Gratis',
    },    {
        src: 'https://i.pinimg.com/736x/0b/d5/b1/0bd5b138bca82c1242270f9e9440a53a.jpg',
        src1: 'https://i.pinimg.com/736x/0b/d5/b1/0bd5b138bca82c1242270f9e9440a53a.jpg',
        src2: 'https://i.pinimg.com/736x/3b/9d/09/3b9d0904fb3d8ed897d3401da80f5dc0.jpg',
        src3: 'https://i.pinimg.com/564x/40/95/e4/4095e47ba53c7cb5b09d8a3d57620b81.jpg',
        src: 'https://i.pinimg.com/564x/40/95/e4/4095e47ba53c7cb5b09d8a3d57620b81.jpg',
        titlecard: 'Masjid Agung Jawa Tengah',
        title: 'Masjid Agung Jawa Tengah',
        province:'Semarang, Jawa Tengah',
        description: 'Masjid Agung Jawa Tengah, terletak di Semarang, adalah salah satu masjid terbesar dan termegah di Indonesia. Arsitekturnya menggabungkan gaya Jawa, Arab, dan Romawi, menciptakan tampilan yang unik dan indah. Masjid ini memiliki menara setinggi 99 meter yang menawarkan pemandangan panorama kota Semarang. Di dalam kompleks masjid, terdapat museum dan perpustakaan yang menyimpan berbagai koleksi keislaman. Masjid ini juga menjadi pusat kegiatan keagamaan dan sosial bagi masyarakat setempat.',
        price:'Harga Ticket Masuk : Gratis',
    },    {
        src: 'https://i.pinimg.com/564x/6c/74/70/6c74708e22000d83a07173d2fbc3ba2d.jpg',
        src1: 'https://i.pinimg.com/564x/6c/74/70/6c74708e22000d83a07173d2fbc3ba2d.jpg',
        src2: 'https://i.pinimg.com/564x/b4/74/c8/b474c8f46797f24fc92539376d268922.jpg',
        src3: 'https://i.pinimg.com/736x/cb/b1/5a/cbb15acd0983a690211ad403bcdea04b.jpg',
        src: 'https://i.pinimg.com/736x/cb/b1/5a/cbb15acd0983a690211ad403bcdea04b.jpg',
        title: 'Museum Batik Danar Hadi (House of Danar Hadi)',
        titlecard: 'Museum Batik Danar Hadi (House of Danar Hadi)',
        province:'Surakarta, Jawa Tengah',
        description: 'Museum Batik Danar Hadi terletak di Surakarta, Jawa Tengah, dan menampilkan koleksi batik yang sangat beragam dari berbagai daerah di Indonesia. Museum ini tidak hanya memamerkan kain batik, tetapi juga mengedukasi pengunjung tentang sejarah dan proses pembuatan batik. Di dalamnya, terdapat galeri-galeri yang memperlihatkan motif-motif batik klasik dan kontemporer. Pengunjung juga bisa menyaksikan langsung proses pembuatan batik oleh para pengrajin yang terampil.',
        price:'Harga Ticket Masuk : Rp 10.000',
    },    {
        src: 'https://i.pinimg.com/564x/c2/c4/ad/c2c4adabb1ce5aae63d020181411f57b.jpg',
        src1: 'https://i.pinimg.com/564x/c2/c4/ad/c2c4adabb1ce5aae63d020181411f57b.jpg',
        src2: 'https://i.pinimg.com/564x/9f/31/42/9f3142f0e8e33ff6734912c1c4ab5b6b.jpg',
        src3: 'https://i.pinimg.com/564x/fd/b2/24/fdb224eeef092fdbd85d45fec1053451.jpg',
        src: 'https://i.pinimg.com/564x/fd/b2/24/fdb224eeef092fdbd85d45fec1053451.jpg',
        titlecard: 'Candi Sukuh',
        title: 'Candi Sukuh',
        province:'Kabupaten Karang Anyar, Jawa Tengah ',
        description: 'Candi Sukuh adalah candi Hindu yang terletak di lereng Gunung Lawu, Jawa Tengah. Candi ini memiliki arsitektur yang unik dan tidak biasa dibandingkan dengan candi-candi Hindu lainnya di Jawa, dengan bentuk yang menyerupai piramida bertingkat. Relief dan patung-patung di Candi Sukuh menggambarkan berbagai mitologi Hindu dan simbol-simbol kesuburan. Lokasi candi yang berada di ketinggian memberikan pemandangan alam yang indah dan suasana yang sejuk, menjadikannya tempat yang menarik untuk dikunjungi.',
        price:'Harga Ticket Masuk : Rp 35.000',
    },    {
        src: 'https://i.pinimg.com/736x/1e/35/c5/1e35c5f8fd715ffd9397d97d9c618f78.jpg',
        src1: 'https://i.pinimg.com/736x/1e/35/c5/1e35c5f8fd715ffd9397d97d9c618f78.jpg',
        src2: 'https://i.pinimg.com/564x/74/5f/ea/745fea2045cb045cf7e35ea831bb4511.jpg',
        src3: 'https://i.pinimg.com/736x/2e/63/95/2e6395349d155be41827957032895646.jpg',
        src: 'https://i.pinimg.com/736x/2e/63/95/2e6395349d155be41827957032895646.jpg',
        titlecard: 'Candi Gedong Songo',
        title: 'Candi Gedong Songo',
        province:'Kabupaten Semarang, Jawa Tengah ',
        description: 'Candi Gedong Songo adalah kompleks candi Hindu yang terletak di lereng Gunung Ungaran, Jawa Tengah. Kompleks ini terdiri dari sembilan candi yang tersebar di area pegunungan dengan pemandangan yang sangat indah. Candi-candi ini dibangun pada abad ke-9 dan menunjukkan keahlian arsitektur serta seni rupa dari masa tersebut. Selain keindahan arsitektur, pengunjung juga dapat menikmati udara pegunungan yang sejuk dan pemandangan alam yang memukau sepanjang jalur menuju setiap candi.',
        price:'Harga Ticket Masuk : Rp 15.000',
    }, {
        src: 'https://i.pinimg.com/564x/c0/d8/0d/c0d80d3890ef15503f3f88a2e9db022b.jpg',
        src1: 'https://i.pinimg.com/564x/c0/d8/0d/c0d80d3890ef15503f3f88a2e9db022b.jpg',
        src2: 'https://i.pinimg.com/736x/2c/5c/29/2c5c299a702a665b1ac0828d0e0d94bb.jpg',
        src3: 'https://i.pinimg.com/564x/05/c3/e6/05c3e6c250725dccdff008f52fe1c43c.jpg',
        src: 'https://i.pinimg.com/564x/05/c3/e6/05c3e6c250725dccdff008f52fe1c43c.jpg',
        titlecard: 'Kota Lama',
        title: 'Kota Lama',
        province:'Semarang, Jawa Tengah',
        description: 'Kota Lama Semarang adalah area bersejarah yang dipenuhi bangunan kolonial Belanda di pusat kota Semarang, Jawa Tengah. Dikenal juga sebagai "Little Netherlands", kawasan ini menawarkan suasana nostalgia dengan arsitektur klasik yang terawat baik. Di sini, pengunjung dapat menjelajahi kafe-kafe, museum, dan galeri seni yang menarik. Beberapa bangunan terkenal di Kota Lama termasuk Gereja Blenduk, Taman Srigunting, dan Stasiun Tawang. Area ini juga sering menjadi lokasi acara budaya dan festival yang menambah daya tariknya',
        price:'Harga Ticket Masuk : Rp 15.000',
    }
];

let currentIndex = 0;

function getImageIndexes(index) {
    const totalImages = images.length;
    return [
        (index + totalImages - 1) % totalImages,
        index,
        (index + 1) % totalImages
    ];
}

function displayImage(index, direction) {
    const [prevIndex, currentIndex, nextIndex] = getImageIndexes(index);

    const prevImage = images[prevIndex];
    const currentImage = images[currentIndex];
    const nextImage = images[nextIndex];

    document.getElementById('img-1').src = prevImage.src;
    document.getElementById('img-21').src = currentImage.src1;
    document.getElementById('img-22').src = currentImage.src2;
    document.getElementById('img-23').src = currentImage.src3;
    document.getElementById('img-3').src = nextImage.src;
    document.getElementById('container-title').textContent = currentImage.title;
    document.getElementById('card-title').textContent = currentImage.titlecard;
    document.getElementById('container-provinsi').textContent = currentImage.province; 
    document.getElementById('container-deskripsi').textContent = currentImage.description;
    document.getElementById('container-price').textContent = currentImage.price; 

    const cardContainer = document.querySelector('.card-container');
    if (direction === 'next') {
        cardContainer.classList.add('slide-left');
    } else {
        cardContainer.classList.add('slide-right');
    }

    cardContainer.addEventListener('animationend', () => {
        cardContainer.classList.remove('slide-left', 'slide-right');
    }, { once: true });
}

displayImage(currentIndex, 'next');

document.getElementById('next-button').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    displayImage(currentIndex, 'next');
});

document.getElementById('prev-button').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    displayImage(currentIndex, 'prev');
});

let map;
let directionsRenderer;
let currentRouteMarker;
let userLocation;
let currentPos = 2;

function initMap() {
    const centralJavaCenter = { lat: -7.150975, lng: 110.1402594 };
    map = new google.maps.Map(document.getElementById('map'), {
        center: centralJavaCenter,
        zoom: 8
    });

    directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            const userMarker = new google.maps.Marker({
                position: userLocation,
                map: map,
                title: 'Your Location'
            });

            const markers = [
                { position: new google.maps.LatLng(-7.2102, 110.3420), title: 'Candi Gedong' },
                { position: new google.maps.LatLng(-6.9676476, 110.4289448), title: 'Kota Lama Semarang' },
                { position: new google.maps.LatLng(-7.2149, 109.8994), title: 'Dataran Tinggi Dieng' },
                { position: new google.maps.LatLng(-7.305630, 110.445630), title: 'Rawa Pening' },
                { position: new google.maps.LatLng(-7.4524377, 110.4408198), title: 'Gunung Merbabu' },
                { position: new google.maps.LatLng(-7.7702, 109.4130), title: 'Pantai Menganti' },
                { position: new google.maps.LatLng(-7.0565, 110.4863), title: 'Brown Canyon' },
                { position: new google.maps.LatLng(-7.540718, 110.445724), title: 'Gunung Merapi' },
                { position: new google.maps.LatLng(-7.157352530985221, 110.35673672437348), title: 'Air Terjun Lawe'},
                { position: new google.maps.LatLng(-7.2262, 109.2648), title: 'Gunung Slamet' },
                { position: new google.maps.LatLng(-5.8398, 110.4111), title: 'Pantai Tanjung' },
                { position: new google.maps.LatLng(-7.7607, 109.4852), title: 'Pantai Suwuk' },
                { position: new google.maps.LatLng(-6.9841, 110.4108), title: 'Lawang Sewu' },
                { position: new google.maps.LatLng(-6.9963, 110.398), title: 'Klenteng Sam Po Kong' },
                { position: new google.maps.LatLng(-7.607355, 110.203804), title: 'Candi Borobudur' },
                { position: new google.maps.LatLng(-7.2646, 110.4047), title: 'Museum Kereta Api Ambarawa' },
                { position: new google.maps.LatLng(-7.5778, 110.8279), title: 'Keraton Surakarta' },
                { position: new google.maps.LatLng(-6.9835, 110.4451), title: 'Masjid Agung Jawa Tengah' },
                { position: new google.maps.LatLng(-7.568762302398682, 110.81633758544922), title: 'Museum Batik Danar' },
                { position: new google.maps.LatLng(-7.6277, 111.1314), title: 'Candi Sukuh' }
            ];

            function calculateRoute(markerPosition) {
                const directionsService = new google.maps.DirectionsService();
                const request = {
                    origin: userLocation,
                    destination: markerPosition,
                    travelMode: 'DRIVING'
                };

                directionsService.route(request, function(response, status) {
                    if (status === 'OK') {
                        directionsRenderer.setDirections(response);
                        const route = response.routes[0];
                        const duration = route.legs[0].duration.text;
                        const distance = route.legs[0].distance.text;

                        const routeInfoDiv = document.getElementById('route-info');
                        routeInfoDiv.style.display = 'block';
                        routeInfoDiv.textContent = `Estimated duration: ${duration}, Total distance: ${distance}`;

                        const googleMapsLink = document.getElementById('google-maps-link');
                        googleMapsLink.href = `https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=${markerPosition.lat()},${markerPosition.lng()}`;
                        document.getElementById('route-link').style.display = 'block';
                    } else {
                        alert('Directions request failed due to ' + status);
                    }
                });
            }

            markers.forEach((marker, index) => {
                const markerObj = new google.maps.Marker({
                    position: marker.position,
                    map: map,
                    title: marker.title
                });

                markerObj.addListener('click', function() {
                    if (currentRouteMarker === markerObj) {
                        directionsRenderer.setDirections({ routes: [] });
                        currentRouteMarker = null;
                        document.getElementById('route-link').style.display = 'none';
                        document.getElementById('route-info').style.display = 'none';
                    } else {
                        calculateRoute(marker.position);
                        currentRouteMarker = markerObj;
                    }
                    currentPos = index;
                });
            });

            document.getElementById('prev-button').addEventListener('click', function() {
                currentPos = (currentPos - 1 + markers.length) % markers.length;
                calculateRoute(markers[currentPos].position);
            });

            document.getElementById('next-button').addEventListener('click', function() {
                currentPos = (currentPos + 1) % markers.length;
                calculateRoute(markers[currentPos].position);
            });

        }, function() {
            handleLocationError(true, map.getCenter());
        });
    } else {
        handleLocationError(false, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, pos) {
    const errorMessage = browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.';
    displayErrorMessage(errorMessage);
}

function displayErrorMessage(message) {
    const errorDiv = document.getElementById('error-message');
    errorDiv.style.display = 'block';
    errorDiv.textContent = message;
    document.getElementById('map').style.display = 'none';
}

function handleApiError() {
    displayErrorMessage('Failed to load Google Maps. Please try again later.');
}

const apiKey = '6f68b86aeadebcec03921accca4a70f6';
        const locations = [
        { name: 'Candi Gedong', lat: -7.2102, lon: 110.3420 },
        { name: 'Kota Lama Semarang', lat: -6.9676476, lon: 110.4289448 },
        { name: 'Dataran Tinggi Dieng', lat: -7.2149, lon: 109.8994 },
        { name: 'Rawa Pening', lat: -7.305630, lon: 110.445630 },
        { name: 'Gunung Merbabu', lat: -7.4524377, lon: 110.4408198 },
        { name: 'Pantai Menganti', lat: -7.7702, lon: 109.4130 },
        { name: 'Brown Canyon', lat: -7.0565, lon: 110.4863 },
        { name: 'Gunung Merapi', lat: -7.540718, lon: 110.445724 },
        { name: 'Air Terjun Curug Lawe', lat: -7.157352530985221, lon: 110.35673672437348},
        { name: 'Gunung Slamet', lat: -7.2262, lon: 109.2648 },
        { name: 'Pantai Tanjung', lat: -5.8398, lon: 110.4111 },
        { name: 'Pantai Suwuk', lat: -7.7607, lon: 109.4852 },
        { name: 'Lawang Sewu', lat: -6.9841, lon: 110.4108 },
        { name: 'Klenteng Sam Po Kong', lat: -6.9963, lon: 110.398 },
        { name: 'Candi Borobudur', lat: -7.607355, lon: 110.203804 },
        { name: 'Museum Kereta Api Ambarawa', lat: -7.2646, lon: 110.4047 },
        { name: 'Keraton Surakarta', lat: -7.5778, lon: 110.8279 },
        { name: 'Masjid Agung Jawa Tengah', lat: -6.9835, lon: 110.4451 },
        { name: 'Museum Batik Danar', lat: -7.568762302398682, lon: 110.81633758544922 },
        { name: 'Candi Sukuh', lat: -7.6277, lon: 111.1314 }
];
        let currentLoc = 2;

        function fetchWeatherData(lat, lon) {
            const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&appid=${apiKey}`;

            return fetch(url)
                .then(response => response.json())
                .then(data => data)
                .catch(error => console.error('Error fetching the weather data:', error));
        }

        function displayWeather(location) {
            fetchWeatherData(location.lat, location.lon)
                .then(data => {
                    const currentWeather = data.daily[0]; 
                    const dailyForecast = data.daily.slice(1, 4);
                    const locationName = document.getElementById('location');
                    const currentWeatherDiv = document.getElementById('current-weather');
                    const forecastDiv = document.getElementById('forecast');

                    locationName.textContent = location.name;

                    const currentWeatherDate = new Date(currentWeather.dt * 1000);
                    const currentWeatherDay = currentWeatherDate.toLocaleDateString('en', { weekday: 'long' });
                    const currentWeatherIconUrl = `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`;
                    const currentTemperatureCelsius = (currentWeather.temp.day - 273.15).toFixed(2);
                    currentWeatherDiv.innerHTML = `
                        <div class="current-weather-item">
                            <p class="weather-info">${currentWeatherDay}</p>
                            <img src="${currentWeatherIconUrl}" alt="Weather Icon">
                            <p class="weather-info">${currentTemperatureCelsius} °C</p>
                            <p class="weather-info">${currentWeather.weather[0].description}</p>
                        </div>
                    `;

                    forecastDiv.innerHTML = ''; 
                    dailyForecast.forEach(day => {
                        const date = new Date(day.dt * 1000);
                        const dayOfWeek = date.toLocaleDateString('en', { weekday: 'long' });
                        const iconUrl = `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`;

                        const temperatureCelsius = (day.temp.day - 273.15).toFixed(2);

                        const forecastHTML = `
                            <div class="forecast-item">
                                <p class="weather-info">${dayOfWeek}</p>
                                <img src="${iconUrl}" alt="Weather Icon">
                                <p class="weather-info">${temperatureCelsius} °C</p>
                                <p class="weather-info">${day.weather[0].description}</p>
                            </div>
                        `;

                        forecastDiv.insertAdjacentHTML('beforeend', forecastHTML);
                    });
                });
        }

        displayWeather(locations[currentLoc]);

        document.getElementById('prev-button').addEventListener('click', function() {
            currentLoc = (currentLoc - 1 + locations.length) % locations.length;
            displayWeather(locations[currentLoc]);
        });

        document.getElementById('next-button').addEventListener('click', function() {
            currentLoc = (currentLoc + 1) % locations.length;
            displayWeather(locations[currentLoc]);
        });