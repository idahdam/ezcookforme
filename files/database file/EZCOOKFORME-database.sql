--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3 (Ubuntu 13.3-1.pgdg20.04+1)
-- Dumped by pg_dump version 13.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: diff_type; Type: TYPE; Schema: public; Owner: ntsbmdqtzghujc
--

CREATE TYPE public.diff_type AS ENUM (
    'easy',
    'medium',
    'hard'
);


ALTER TYPE public.diff_type OWNER TO ntsbmdqtzghujc;

--
-- Name: insert_appetizer_to_all_dish(); Type: FUNCTION; Schema: public; Owner: ntsbmdqtzghujc
--

CREATE FUNCTION public.insert_appetizer_to_all_dish() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
INSERT INTO all_dish(
id, type, dish_name, tai)
VALUES (new.id, 'appetizer', new.dish_name, new.tai);
RETURN new;
END;
$$;


ALTER FUNCTION public.insert_appetizer_to_all_dish() OWNER TO ntsbmdqtzghujc;

--
-- Name: insert_dessert_to_all_dish(); Type: FUNCTION; Schema: public; Owner: ntsbmdqtzghujc
--

CREATE FUNCTION public.insert_dessert_to_all_dish() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
INSERT INTO all_dish(
id, type, dish_name, tai)
VALUES (new.id, 'dessert', new.dish_name, new.tai);
RETURN new;
END;
$$;


ALTER FUNCTION public.insert_dessert_to_all_dish() OWNER TO ntsbmdqtzghujc;

--
-- Name: insert_maincourse_to_all_dish(); Type: FUNCTION; Schema: public; Owner: ntsbmdqtzghujc
--

CREATE FUNCTION public.insert_maincourse_to_all_dish() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
INSERT INTO all_dish(
id, type, dish_name, tai)
VALUES (new.id, 'main course', new.dish_name, new.tai);
RETURN new;
END;
$$;


ALTER FUNCTION public.insert_maincourse_to_all_dish() OWNER TO ntsbmdqtzghujc;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: all_dish; Type: TABLE; Schema: public; Owner: ntsbmdqtzghujc
--

CREATE TABLE public.all_dish (
    id integer NOT NULL,
    type text,
    dish_name text,
    tai text
);


ALTER TABLE public.all_dish OWNER TO ntsbmdqtzghujc;

--
-- Name: appetizer; Type: TABLE; Schema: public; Owner: ntsbmdqtzghujc
--

CREATE TABLE public.appetizer (
    id integer NOT NULL,
    dish_name text,
    photo text,
    description text,
    tai text,
    instructions text,
    difficulty public.diff_type,
    rating double precision
);


ALTER TABLE public.appetizer OWNER TO ntsbmdqtzghujc;

--
-- Name: appetizer_id_seq; Type: SEQUENCE; Schema: public; Owner: ntsbmdqtzghujc
--

CREATE SEQUENCE public.appetizer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.appetizer_id_seq OWNER TO ntsbmdqtzghujc;

--
-- Name: appetizer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ntsbmdqtzghujc
--

ALTER SEQUENCE public.appetizer_id_seq OWNED BY public.appetizer.id;


--
-- Name: dessert; Type: TABLE; Schema: public; Owner: ntsbmdqtzghujc
--

CREATE TABLE public.dessert (
    id integer NOT NULL,
    dish_name text,
    photo text,
    description text,
    tai text,
    instructions text,
    difficulty public.diff_type,
    rating double precision
);


ALTER TABLE public.dessert OWNER TO ntsbmdqtzghujc;

--
-- Name: dessert_id_seq; Type: SEQUENCE; Schema: public; Owner: ntsbmdqtzghujc
--

CREATE SEQUENCE public.dessert_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.dessert_id_seq OWNER TO ntsbmdqtzghujc;

--
-- Name: dessert_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ntsbmdqtzghujc
--

ALTER SEQUENCE public.dessert_id_seq OWNED BY public.dessert.id;


--
-- Name: kontributor; Type: TABLE; Schema: public; Owner: ntsbmdqtzghujc
--

CREATE TABLE public.kontributor (
    id integer NOT NULL,
    name text,
    email text,
    no_hp text,
    dish_name text,
    type text
);


ALTER TABLE public.kontributor OWNER TO ntsbmdqtzghujc;

--
-- Name: kontributor_id_seq; Type: SEQUENCE; Schema: public; Owner: ntsbmdqtzghujc
--

CREATE SEQUENCE public.kontributor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.kontributor_id_seq OWNER TO ntsbmdqtzghujc;

--
-- Name: kontributor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ntsbmdqtzghujc
--

ALTER SEQUENCE public.kontributor_id_seq OWNED BY public.kontributor.id;


--
-- Name: maincourse; Type: TABLE; Schema: public; Owner: ntsbmdqtzghujc
--

CREATE TABLE public.maincourse (
    id integer NOT NULL,
    dish_name text,
    photo text,
    description text,
    tai text,
    instructions text,
    difficulty public.diff_type,
    rating double precision
);


ALTER TABLE public.maincourse OWNER TO ntsbmdqtzghujc;

--
-- Name: maincourse_id_seq; Type: SEQUENCE; Schema: public; Owner: ntsbmdqtzghujc
--

CREATE SEQUENCE public.maincourse_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.maincourse_id_seq OWNER TO ntsbmdqtzghujc;

--
-- Name: maincourse_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ntsbmdqtzghujc
--

ALTER SEQUENCE public.maincourse_id_seq OWNED BY public.maincourse.id;


--
-- Name: appetizer id; Type: DEFAULT; Schema: public; Owner: ntsbmdqtzghujc
--

ALTER TABLE ONLY public.appetizer ALTER COLUMN id SET DEFAULT nextval('public.appetizer_id_seq'::regclass);


--
-- Name: dessert id; Type: DEFAULT; Schema: public; Owner: ntsbmdqtzghujc
--

ALTER TABLE ONLY public.dessert ALTER COLUMN id SET DEFAULT nextval('public.dessert_id_seq'::regclass);


--
-- Name: kontributor id; Type: DEFAULT; Schema: public; Owner: ntsbmdqtzghujc
--

ALTER TABLE ONLY public.kontributor ALTER COLUMN id SET DEFAULT nextval('public.kontributor_id_seq'::regclass);


--
-- Name: maincourse id; Type: DEFAULT; Schema: public; Owner: ntsbmdqtzghujc
--

ALTER TABLE ONLY public.maincourse ALTER COLUMN id SET DEFAULT nextval('public.maincourse_id_seq'::regclass);


--
-- Data for Name: all_dish; Type: TABLE DATA; Schema: public; Owner: ntsbmdqtzghujc
--

COPY public.all_dish (id, type, dish_name, tai) FROM stdin;
36	appetizer	Onion Ring	- 1 bh bawang bombay\n- Bahan celupan 1\n- 1 bh telor\n- 1/4 sdt lada bubuk\n- 1/4 sdt kaldu bubuk\n- Bahan celupan 2:\n- 2 sdm tepung bumbu\n- Secukupnya air (adonan kental)\n- Bahan kering:\n- Secukupnya tepung roti
20	main course	Samgyetang	- 1 ekor ayam ukuran sedang cuci bersih tiriskan\n- 1/3 cup beras cuci bersih tiriskan\n- 15 siung bwng putih utuh\n- 5 buah Daun bwng iris memanjang 5cm\n- 3-4 Tusuk gigi\n- Benang\n- 1.5 L air sesuaikan\n- 1/2-1 sdt garam sesuaikan\n- 1/2 sdt lada bubuk\n- jika suka Boleh tambah jahe utuh
15	dessert	Donat Maizena	- 250 gr tepung terigu (saya pakai ≡ƒö╝) bagus lagi pakai cakra\n- 1 sdm peres tepung maizena\n- 2 sdm gula pasir (saya pakai 1 1/2sdm saja)\n- 1 sdt ragi fermipan\n- 140 ml air hangat kuku (jangan terlalu panas)\n- 1/2 sdt SP / TBM / Ovallete (resep asli tidak pakai)\n- Sejumput garam (resep asli tidak pakai)\n- 30 gr mentega\n- Minyak untuk menggoreng
37	appetizer	Ratatouille	- 1 buah zucini\n- 1 buah terong ungu\n- 2 buah tomat\nSaus :\n- 1/2 buah paprika merah (kalau ada bisa ditambah paprika hijau)\n- 1 buah bawang bombay, potong2\n- 2 siung bawang putih, cincang\n- 100 gr saus tomat\n- 2 batang rosemary\n- 2 batang seledri\n- 1 batang daun bawang\n- 1/2 sdt garam\n- 1 sdt lada hitam bubuk\n- 1 sdt gula pasir\n- 1 sdt kaldu bubuk\n- 1/2 sdt oregano\n- 100 ml air
16	dessert	Vanilla Cupcake	- 2 butir telur utuh\n- 200 gram tepung terigu\n- 185 gram gula kastor (aku: gula pasir diblender)\n- 100 gram margarin, suhu ruang\n- 125 ml susu cair\n- 1 sdt vanilla essence (vanili bubuk juga bisa)\n- 1 sdt baking powder\n- Secukupnya butter cream
21	main course	Bibimbap (δ╣äδ╣öδ░Ñ)	secukupnya Wortel\nsecukupnya Kecambah\nsecukupnya Timun\nsecukupnya Jamur hioko\nsecukupnya Jamur kuping\nsecukupnya Bayam\nsecukupnya Daging sapi\n1 buah Telur\n1 sdm Gochujang\nMinyak wijen\nGaram\nSaus tiram\nBiji wijen
22	main course	Salmon Crispy Aburi	1. 100 gr fresh salmon premium (harga 40 rb'an beli disupermarket dkt kantor)\n2. secukupnya tobiko (kira2 kepake cuma 5 rb karena buat topping aja, per 50 gr harganya cuma 20 ribuan)\n3. secukupnya nasi atau 2 centong nasi dehh (masak lebih dikit air cuma jangan keras banget yah, pokoknya pas)\n4. 2 sdm cuka sushi (harga 250 ml nya cuma 20 ribuan, jadi kalo beli itu bisa di masak puluhan kali hehe)\n5. secukupnya mayo origanl (kalo yg mau ekonomis beli sachet 8 rb)\n6. secukupnya kecap asin kikoman untuk sushi (150 ml 20 rb, bisa ditambah air hangat jika dirasa terlalu asin pekat, oya 150 ml tanpa ditambah air pun bisa buat 10 x makan yah)
38	appetizer	Edamame	1. 250 gr edamame atau kacang kedelai besar\n2. 1 sdt garam\n3. 2 sdt gula pasir\n4. 500 ml air untuk merebus\n5. 200 ml air dingin\n6. secukupnya garam untuk taburan jika suka asin (saya tidak pakai)
17	dessert	Mochi Ice Cream	1. 125 gr Tepung ketan putih (15 sdm)\n2. 20 gr Gula pasir (2sdm)\n3. 100 ml Air\n4. Eskrim secukupnya
\.


--
-- Data for Name: appetizer; Type: TABLE DATA; Schema: public; Owner: ntsbmdqtzghujc
--

COPY public.appetizer (id, dish_name, photo, description, tai, instructions, difficulty, rating) FROM stdin;
37	Ratatouille	https://res.cloudinary.com/dxsh8co1d/image/upload/v1623487717/ok4cm0q6a2p5r8xdyeed.jpg	Dibaca Ratatui adalah jenis masakan Perancis yg bisa dikunsumsi sebagai appetizer ataupun main course. Terdiri dari sayur-sayuran yang di slice, di beri saus dan dipanggang.  Kali ini kita buat versi Indonesia saja ya, taste nya kita sesuaikan	1. 1 buah zucini\n2. 1 buah terong ungu\n3. 2 buah tomat\nSaus :\n1. 1/2 buah paprika merah (kalau ada bisa ditambah paprika hijau)\n2. 1 buah bawang bombay, potong2\n3. 2 siung bawang putih, cincang\n4. 100 gr saus tomat\n5. 2 batang rosemary\n6. 2 batang seledri\n7. 1 batang daun bawang\n8. 1/2 sdt garam\n9. 1 sdt lada hitam bubuk\n10. 1 sdt gula pasir\n11. 1 sdt kaldu bubuk\n12. 1/2 sdt oregano\n13. 100 ml air	1. Buat saus : potong2 bahan. Panaskan margarin, tumis bawang putih dan bawang bombay hingga harum.\n2. Masukkan paprika, daun bawang, seledri, rosemary. Tambahkan saus tomat dan air. Aduk rata. Beri garam, gula dan kaldu. Masak hingga mendidih. Koreksi rasa dan angkat\n3. Iris tipis sayuran. Siapkan wadah tahan panas, tuang sebagian saus. Tata sayuran potong diatasnya. Tuangi sisa saus\n4. Tutup wadah dg alumunium foil. Panaskan oven dg suhu 200┬░c. Oven ratatouille selama 20 mnt. Buka aluminium foil, lalu oven kembali selama 20 mnt	hard	4.3
38	Edamame	https://res.cloudinary.com/dxsh8co1d/image/upload/v1623586984/kftlhdbnpsic5dwmn1su.jpg	Ini cemilan kesukaan pak suami, walaupun awalnya dia kurang suka karena rasanya hambar katanya. Setelah coba coba pakai resep ini alhamdulillah suka...	1. 250 gr edamame atau kacang kedelai besar\n2. 1 sdt garam\n3. 2 sdt gula pasir\n4. 500 ml air untuk merebus\n5. 200 ml air dingin\n6. secukupnya garam untuk taburan jika suka asin (saya tidak pakai)	1. Cuci bersih edamame, sisihkan\n2. Panaskan air, setelah berbuih masukan edamame,biarkan mendidih. Tidak perlu ditutup ya. Masukan gula dan garam aduk rata.\n3. Masak selama sekitar 8 menit, jangan terlalu lama merebusnya karena akan menyebabkan edamame berair tidak renyah dan benyek. Warna kulitnya juga berubah warna kurang menarik jika dimasak terlalu lama, setelah matang buang air panas, siram dengan air dingin. Kemudian tiriskan.\n4. Boleh ditaburi garam lagi saat akan disajikan.\n5. Sajikan hangat.	easy	4.7
36	Onion Ring	https://res.cloudinary.com/dxsh8co1d/image/upload/v1623432433/my562ioclcqubtefrrk6.jpg	Kriuk banget , enak. Ga nyangka ternyata bawang bombay enak ya kalo digoreng tepung gini.	1. 1 bh bawang bombay\nBahan celupan 1:\n1. 1 bh telor\n2. 1/4 sdt lada bubuk\n3. 1/4 sdt kaldu bubuk\nBahan celupan 2:\n1. 2 sdm tepung bumbu\n2. Secukupnya air (adonan kental)\nBahan kering:\n1. Secukupnya tepung roti	1. Iris bawang. Lalu pisah┬▓ kan antara 1 dengan yg lainnya hingga membentuk lingkaran.\n2. Campur semua bahan celupan 1, sisihkan. Di wadah lain campur bahan celupan 2, sisihkan juga.\n3. Siapkan semua bahan yaitu bawang, bahan celupan 1, bahan celupan 2, dan bahan kering. Pertama, celupkan bawang di bahan celupan 1, lalu celupkan lagi ke celupan 2, dan yang terakhir balurkan di tepung roti. Balurkan hingga merata. Jika mau tebal bisa di ulang lagi ya.\n4. Panaskan minyak, goreng bawang hingga golden brown.\n5. Sajikan dengan saus dan mayonais. Yummy ≡ƒÿï	medium	5
\.


--
-- Data for Name: dessert; Type: TABLE DATA; Schema: public; Owner: ntsbmdqtzghujc
--

COPY public.dessert (id, dish_name, photo, description, tai, instructions, difficulty, rating) FROM stdin;
15	Donat Maizena	https://res.cloudinary.com/dxsh8co1d/image/upload/v1623415933/cr6cgxllpxky97cj0vff.webp	Berawal dr keinginanku untuk punya keahlian khusus diluar pekerjaanku saat ini, mama putar otak donk..bikin apa ya..yang bahannya praktis, ndak terlalu mahal misalkan jadinya gagal..eh syukur2 nantinya bisa dipake bahan jualan kalau udah ndak ngantor lagi..jadilah DONAT ini ya buibu..resep asli dr mba @hikmahnoviant dg judul Donat Maizena yg sedikit tak modifikasi sesuai seleraku..semoga bermanfaat ya	- 250 gr tepung terigu (saya pakai ≡ƒö╝) bagus lagi pakai cakra\n- 1 sdm peres tepung maizena\n- 2 sdm gula pasir (saya pakai 1 1/2sdm saja)\n- 1 sdt ragi fermipan\n- 140 ml air hangat kuku (jangan terlalu panas)\n- 1/2 sdt SP / TBM / Ovallete (resep asli tidak pakai)\n- Sejumput garam (resep asli tidak pakai)\n- 30 gr mentega\n- Minyak untuk menggoreng	- Buat bahan biangnya terlebih dahulu dengan mencampur air hangat kuku, gula dan ragi biarkan sd berbusa dan naik, tanda ragi aktif (gula lebih baik diaduk disini sd larut agar permukaan adonan mulus)\n- Campurkan semua tepung dan SP, buat lubang ditengah lalu masukkan bahan biang sediki demi sedikit sambil di aduk sd merata (bahan biang tidak harus habis, dilihat dulu kelembaban adonan, stop jika adonan sudah cukup kalis agar jadinya tidak lembek malah susah diuleni)\n- Campurkan metega dan sejumput garam, uleni hingga kalis elastis, masukan menteganya dikit2 dulu ya, lihat kelembaban adonan, ciri adonan elastis jika diregangkan tidak putus, tidak perlu jg sampai window pane menurut saya, karena kita tdk sedang membuat roti\n- Masukkan ke wadah bersih yg sudah di taburi sedikit minyak goreng agar adonan tidak kering, tutup dengan serbet bersih atau plastik wrap. Biarkan adonan istirahat dan mengembang 2x lipat (kurang lebih 45menit)\n- Setelah mengembang 2x lipat, tinju2 adonan agar gas yg ada didalam adonan bisa keluar, bagi adonan sesuai selera, kalau aku kecil aja jadi 12 biji..bentuk sesuai selera lalu istirahatkan adonan lagi sekitar 5 menit lalu goreng dengan minyak suhu sedang (balik 1 x saja agar donat tdk menyerap banyak minyak)\n- Tunggu dingin, lalu donat siap dihias..bisa pakai icing sugar, topping glaze..atau polosan aja dah oke lo buibuu..hasil akhirnya donat dengan rasa gurih ya..bukan manis jadi ndak eneg kalau dikasih topping..plus kempus2 ndak seret loo..selamat mencoba	medium	4.6
16	Vanilla Cupcake	https://res.cloudinary.com/dxsh8co1d/image/upload/v1623488409/yjldijfrlxr3gqqvsy3o.jpg	Cupcake dengan buttercream dan sprinkle	- 2 butir telur utuh\n- 200 gram tepung terigu\n- 185 gram gula kastor (aku: gula pasir diblender)\n- 100 gram margarin, suhu ruang\n- 125 ml susu cair\n- 1 sdt vanilla essence (vanili bubuk juga bisa)\n- 1 sdt baking powder\n- Secukupnya butter cream	- Mixer dengan kecepatan tinggi telur, gula, margarin, dan vanilla hingga mengembang dan pucat.\n- Masukkan telur satu persatu, mixer lagi hingga rata.\n- Masukkan terigu dan susu cair secara bergantian dan juga bertahap. Mixer lagi dengan kecepatan rendah hingga rata.\n- Siapkan cup, tuang adonan hingga 1/3 bagian. Ini aku kebanyakan ya≡ƒÿü≡ƒñ¡ jadi pas dipanggang lumer kemana2≡ƒÿé. Temen2 cukup 1/3 bagian cup aja ya...\n- Panggang di oven dengan suhu 180┬░C api atas bawah hingga matang. Setelah matang keluarkan dan dinginkan di cooling rack.\n- Ini aku juga bikin pakai loyang biasa.\n- Tunggu cake benar2 dingin baru hias dengan butter cream sesuai selera. Selamat mencoba ≡ƒÿÿΓ¥ú∩╕Å≡ƒî╕	medium	4.8
17	Mochi Ice Cream	https://res.cloudinary.com/dxsh8co1d/image/upload/v1623587274/ooodqevmmj8m4hz1eejw.jpg	Ceritanya pengen banget mochi, ampe kebawa mimpi ≡ƒÿà pulang kerja ga bisa langsung tidur, jam 2 pagi nyoba bikin mochi dengan bahan seadanya...yups bener" seadanya karna cuma pake 3 bahan aja, tanpa maizena tanpa SKM dll tapi karna pas bagian ngegiling keburu ngantuk jadilah digiling seadanya (tebel") ≡ƒÿà≡ƒÿà tapi tetep enak ko ≡ƒÿì≡ƒÿì≡ƒÿì	1. 125 gr Tepung ketan putih (15 sdm)\n2. 20 gr Gula pasir (2sdm)\n3. 100 ml Air\n4. Eskrim secukupnya	1. Campur semua bahan utama sampai benar" tercampur rata, pakai air biasa janganpanas/dingin\n2. Saring bahan yg sudah tercampur untuk memastikan tidak ada gumpalan tepung\n3. Untuk step ini optional yaa siapa tau mau dikasih pewarna makanan silahkan, disini saya pakai pewarna makanan warna coklat, campur rata\n4. Masukkan adonan ke dalam wadah tahan panas yg sudah diolesi minyak goreng terlebih dahulu agar tidak lengket\n5. Masukkan adonan kedalam kukusan yg sudah mendidih airnya, tutup menggunakan kain agar tetesan air tidak mengenai adonan (kena sedikit ga masalah sih asal jangan sampe banjir\n6. Diamkan 20 menit kemudian tes tusuk menggunakan tusuk gigi atau garpu pastikan tidak ada adonan menempel pada tusuk gigi atau garpu\n7. Setelah 20 menit, aduk rata adonan dalam keadaan panas sampai tekstir adonan lebih kenyal atau chewy, step ini penting yaa agak mochi lebih kenyal teksturnya sedikit olah raga ga masalah kan? ≡ƒÿé\n8. Taruh adonan yg sudah diaduk ke wadah yg sudah di taburi tepung ketan yg sudah di sangrai\n9. Pipihkan/giling menggunakan gilingan atau gelas yg sudah diolesi tepung ketan sangrai agar tidak lengket sampai ketebalan yg diinginkan\n10. Masukkan bahan isi (bisa apa aja, ice cream/buah/kacang dll) kemudian tutup adonan\n11. Masukkan mochi isi yg sudah jadi ke dalam freezer, dan diamkan di suhu ruang slama 3 menit sebelum dimakan	easy	4.7
\.


--
-- Data for Name: kontributor; Type: TABLE DATA; Schema: public; Owner: ntsbmdqtzghujc
--

COPY public.kontributor (id, name, email, no_hp, dish_name, type) FROM stdin;
21	Agustin Nur Hasanah	agustin@gmail.com	081367528644	Onion Ring	appetizer
22	Dapur Ita	dapurita@gmail.com	08523428842	Samgyetang	maincourse
23	Rahmi Putri Ningtyas	rahmi@gmail.com	087886352418	Donat Maizena	dessert
24	Nayla's Kitchen	resep_nayla@gmail.com	081526815327	Ratatouille	appetizer
26	Retno Asih MB	retno_asih@rocketmail.com	08123456789	Bibimbap (δ╣äδ╣öδ░Ñ)	maincourse
27	Meizyna	meizyna@ui.ac.id	0858809023	Salmon Crispy Aburi	maincourse
28	Umm Liam Syafiq	umm_liam_syafiq@yahoo.com	08989290123	Edamame	appetizer
29	Arum	arum@gmail.com	0	Mochi Ice Cream	dessert
\.


--
-- Data for Name: maincourse; Type: TABLE DATA; Schema: public; Owner: ntsbmdqtzghujc
--

COPY public.maincourse (id, dish_name, photo, description, tai, instructions, difficulty, rating) FROM stdin;
21	Bibimbap (δ╣äδ╣öδ░Ñ)	https://res.cloudinary.com/dxsh8co1d/image/upload/v1623509867/snngszyvbureb2k7gboo.jpg	a large bowl of rice topped with an array of individually prepared vegetables and meat and served with a gochujang(Ω│á∞╢ö∞₧Ñ) sauce. Bibim means mixing, and bap means rice. The mixing usually happens at the table by the diner.	1. secukupnya Wortel\n2. secukupnya Kecambah\n3. secukupnya Timun\n4. secukupnya Jamur hioko\n5. secukupnya Jamur kuping\n6. secukupnya Bayam\n7. secukupnya Daging sapi\n8. 1 buah Telur\n9. 1 sdm Gochujang\n10. Minyak wijen\n11. Garam\n12. Saus tiram\n13. Biji wijen	1. Cuci bersih wortel lalu potong korek api. Di mangkuk tambahkan garam secukupnya, remas pelan2 sampai berair lalu tumis di teflon\n2. Perlakukan timun seperti langkah diatas\n3. Rebus kecambah pada air mendidih selama 1 menit lalu tiriskan. Beri 1 sdt minyak wijen, sisihkan\n4. Rebus bayam pada air mendidih selama 2 menit. Tiriskan lalu letakkan di mangkuk, tambahkan 1 sdt minyak wijen dan sedkiti garam. Sisihkan\n5. Pada hari sebelumnya atau 4 jam sebelum mengolah, rendam. Jamur hioko dan jamur kuping di air selama minimal 4 jam. Setelah 4 jam, cuci jamur tersebut dgn air mengalir lalu tiriskan. Utk jamur hioko nya diperas ya sampe airnya berkurang banyak. Lalu iris sesuai selera\n6. Tumis jamur hioko ditambah sedikit garam\n7. Tumis jamur kuping ditambah sedikit garam\n8. Daging direbus sampai empuk lalu diiris tipis. Tumis seperti langkah di atas, tapi khusus utk daging sapi ditambahkan saus tiram secukupnya. Agar rasanya lebih keluar\n9. Siapkan dolsot, beri sedikit minyak wijen lalu taruh nasi di atasnya. Susun sayur2 yg telah kita tumis tadi (nasiku nasi sisa bikin nasi jamur jadi nggak putih bersih hihi)\n10. Panaskan sebentar dolsot berisi nasi dan sayur tadi diatas api, lalu angkat.\n11. Tambahkan telur ceplok di atasnya jika suka. Beri 1 sdm gochujang lalu tambahkan minyak wijen dan taburkan biji wijen. Bibimbap siap dinikmati\n12. Cara makannya diaduk dulu sampe tercampur rata yah ≡ƒÿï	medium	4.5
20	Samgyetang (∞é╝Ω│äφâò)	https://res.cloudinary.com/dxsh8co1d/image/upload/v1623415676/fktcqtqolhu36cvkec4v.jpg	Masyaa Allah...ini tuh enaaak pake bangets looh, anak2 n suami jg doyan bngtz. Sehat dah pasti trs bikin anget az dibadan apalagi makan nya di saat cuaca	1 ekor ayam ukuran sedang cuci bersih tiriskan\n1/3 cup beras cuci bersih tiriskan\n15 siung bwng putih utuh\n5 buah Daun bwng iris memanjang 5cm\n3-4 Tusuk gigi\nBenang\n1.5 L air sesuaikan\n1/2-1 sdt garam sesuaikan\n1/2 sdt lada bubuk\njika suka Boleh tambah jahe utuh	Setelah semua bahan disiapkan, masukkan beras kedalam ayam utuh selang seling bersamaan dengan bwng putih utuh\nTutup bagian bwh ayam dengan tusuk gigi agar beras tidak menyebar keluar dan ikat kaki ayam dengan benang agar menyatu\nLetakkan ayam didalam panci, masukkan air, daun bwng dan sisa bwng putih utuh\nRebus dengan api besar hingga mendidih, setelah mendidih pindahkan ke api sedang rebus selama 1-1.5 jam tambahkan garam dan lada\nCek rasa dan sajikan bersama Kimchi...selamat mencoba^^	hard	4.3
22	Salmon Crispy Aburi	https://res.cloudinary.com/dxsh8co1d/image/upload/v1623586611/imadubj1dgkshdck6fy6.jpg	Penggemar sushi mana suaranyaaa hehe, akhirnya bisa ada waktu buat sendiri sushi, masuk resto paling ga habis 200-400 rb baru puas makan sushi, kalo ini cuma modal ga nyampe 100 rb udah bisa makan serumah rumah hehe oiya ini hanya versi aburi dan hana salmon saja , utk sushi roll next post	1. 100 gr fresh salmon premium (harga 40 rb'an beli disupermarket dkt kantor)\n2. secukupnya tobiko (kira2 kepake cuma 5 rb karena buat topping aja, per 50 gr harganya cuma 20 ribuan)\n3. secukupnya nasi atau 2 centong nasi dehh (masak lebih dikit air cuma jangan keras banget yah, pokoknya pas)\n4. 2 sdm cuka sushi (harga 250 ml nya cuma 20 ribuan, jadi kalo beli itu bisa di masak puluhan kali hehe)\n5. secukupnya mayo origanl (kalo yg mau ekonomis beli sachet 8 rb)\n6. secukupnya kecap asin kikoman untuk sushi (150 ml 20 rb, bisa ditambah air hangat jika dirasa terlalu asin pekat, oya 150 ml tanpa ditambah air pun bisa buat 10 x makan yah)	1. Campurkan nasi dengan cuka sushi aduk rata (kondisi nasi jangan dalam kondisi panas yah)\n2. Bentuk nasi yang sdh di campur cuka sushi, bentuk pipih memanjang seperti di foto (buat aburi salmon), terus bentuk bulat pipih seperti tabung kira2 diameter 2 cm tinggi 2 cm, bentuk nasi yg ada hingga habis\n3. Setelah nasi di bentuk pipih memanjang dan bulat, potong fresh salmon mengikuti bentuk pipih memanjang buat aburi salmon, dan untuk hana salmon, salmon dipotong tipis dan di balut ke nasi yg sdh dibentuk hingga menutupi nasi\n4. Setelah salmon di letakkan di atas nasi sushi tadi, kemudian torch (bakar), untuk tingkat kematangan bisa diatur, setelah di torch berikan toping mayo dan tobiko sesuai gambar, siap hidangkan dengan cuka sushi	medium	4.4
\.


--
-- Name: appetizer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ntsbmdqtzghujc
--

SELECT pg_catalog.setval('public.appetizer_id_seq', 38, true);


--
-- Name: dessert_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ntsbmdqtzghujc
--

SELECT pg_catalog.setval('public.dessert_id_seq', 17, true);


--
-- Name: kontributor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ntsbmdqtzghujc
--

SELECT pg_catalog.setval('public.kontributor_id_seq', 29, true);


--
-- Name: maincourse_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ntsbmdqtzghujc
--

SELECT pg_catalog.setval('public.maincourse_id_seq', 22, true);


--
-- Name: appetizer appetizer_pkey; Type: CONSTRAINT; Schema: public; Owner: ntsbmdqtzghujc
--

ALTER TABLE ONLY public.appetizer
    ADD CONSTRAINT appetizer_pkey PRIMARY KEY (id);


--
-- Name: dessert dessert_pkey; Type: CONSTRAINT; Schema: public; Owner: ntsbmdqtzghujc
--

ALTER TABLE ONLY public.dessert
    ADD CONSTRAINT dessert_pkey PRIMARY KEY (id);


--
-- Name: kontributor kontributor_pkey; Type: CONSTRAINT; Schema: public; Owner: ntsbmdqtzghujc
--

ALTER TABLE ONLY public.kontributor
    ADD CONSTRAINT kontributor_pkey PRIMARY KEY (id);


--
-- Name: maincourse maincourse_pkey; Type: CONSTRAINT; Schema: public; Owner: ntsbmdqtzghujc
--

ALTER TABLE ONLY public.maincourse
    ADD CONSTRAINT maincourse_pkey PRIMARY KEY (id);


--
-- Name: appetizer trigger_insert_appetizer; Type: TRIGGER; Schema: public; Owner: ntsbmdqtzghujc
--

CREATE TRIGGER trigger_insert_appetizer AFTER INSERT ON public.appetizer FOR EACH ROW EXECUTE FUNCTION public.insert_appetizer_to_all_dish();


--
-- Name: dessert trigger_insert_dessert; Type: TRIGGER; Schema: public; Owner: ntsbmdqtzghujc
--

CREATE TRIGGER trigger_insert_dessert AFTER INSERT ON public.dessert FOR EACH ROW EXECUTE FUNCTION public.insert_dessert_to_all_dish();


--
-- Name: maincourse trigger_insert_maincourse; Type: TRIGGER; Schema: public; Owner: ntsbmdqtzghujc
--

CREATE TRIGGER trigger_insert_maincourse AFTER INSERT ON public.maincourse FOR EACH ROW EXECUTE FUNCTION public.insert_maincourse_to_all_dish();


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: ntsbmdqtzghujc
--

REVOKE ALL ON SCHEMA public FROM postgres;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO ntsbmdqtzghujc;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- Name: LANGUAGE plpgsql; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON LANGUAGE plpgsql TO ntsbmdqtzghujc;


--
-- PostgreSQL database dump complete
--

