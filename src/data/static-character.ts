// imageURL.txtから生成した完全なキャラクターデータ
export interface Character {
    id: string;
    name: string;
    imageUrl: string;
    category: 'umamusume' | 'other';
    selected: boolean;
    weight: number; // 抽選倍率
   }
   
   export const allCharacters: Character[] = [
    { id: 'admiregroove', name: 'アドマイヤグルーヴ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/1b6233c9460c45be81a034dd53ffe7b7/admiregroove_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'admirevega', name: 'アドマイヤベガ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/925d48819455476abc12ff3577a35ea9/admirevega_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'agnesdigital', name: 'アグネスデジタル', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/6b560061c3234a36be1640bc6c67e00d/agnesdigital_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'agnestachyon', name: 'アグネスタキオン', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/0b6e09c2dbdb4cacb16c87571f3b257b/agnestachyon_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'airgroove', name: 'エアグルーヴ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/479656c2d22a4ca18480c52185335b15/airgroove_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'airmessiah', name: 'エアメサイア', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/9b3c204c205f4e76ae1c31f3db2e9646/airmessiah_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'airshakur', name: 'エアシャカール', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/774a464f460547fe9a153b535d2b1984/airshakur_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'akasakamisato', name: '赤坂美里', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/69658f1d37444b62a8e451e9b8039fdc/akasakamisato_list.png', category: 'other', selected: true, weight: 1 },
    { id: 'akikawayayoi', name: '秋川やよい', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/a3d9111af2c04af1881413f252d0a25d/akikawayayoi_list.png', category: 'other', selected: true, weight: 1 },
    { id: 'almondeye', name: 'アーモンドアイ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/6009fc8852bf4db3930510850c2bc8e9/almondeye_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'anshinzawasasami', name: 'アンシンザワササミ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/71783b15668345698f7cc6755b05d0fb/anshinzawasasami_list.png', category: 'other', selected: true, weight: 1 },
    { id: 'astonmachan', name: 'アストンマーチャン', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/0ca3971ec9fd4a998cef1328f23ba730/astonmachan_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'bamboomemory', name: 'バンブーメモリー', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/6f5207cad44044c5a5b7ebffda2d80e7/bamboomemory_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'believe', name: 'ビリーヴ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/142f6ac947e7444bb5235b1e17c8c5b7/believe_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'bikopegasus', name: 'ビコーペガサス', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/778cde50d585476dbb7aa01d9e2ba248/bikopegasus_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'bitterglasse', name: 'ビターグラッセ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/0f00e4c009f44283a6bbef7680c35082/bitterglasse_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'biwahayahide', name: 'ビワハヤヒデ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/5a779ba26d434e409062c6ac89e7db2d/biwahayahide_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'blastonepiece', name: 'ブラストワンピース', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/15d555352d574b44b0106fc70fb0892f/blastonepiece_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'bubblegumfellow', name: 'バブルガムフェロー', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/eb96eb8435944a0abb98c3893afa588a/bubblegumfellow_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'buenavista', name: 'ブエナビスタ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/7f12ea9d50b44a4a9e0b8956eb1fd223/buenavista_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'byerleyturk', name: 'バイアリーターク', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/a49c57bbd91c466c8335e3d879a1ea7c/byerleyturk_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'calstonelighto', name: 'カルストンライトオ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/f1702e191d4045e3854dca9f074228fe/calstonelighto_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'cesario', name: 'セサリオ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/93c31193c3314ba9b7bb92598bcba30b/cesario_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'chevalgrand', name: 'シュヴァルグラン', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/5cf740ed13c64829a4f7b73487d180ff/chevalgrand_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'chronogenesis', name: 'クロノジェネシス', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/e515893fdf2249a8abe6602ee5ebc95e/chronogenesis_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'copanorickey', name: 'コパノリッキー', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/2072a3ff37c343e9a0669eee3894b6fa/copanorickey_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'currenbouquetdor', name: 'カレンブーケドール', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/65ff1570a4ef40af9d00918eb94a9e6f/currenbouquetdor_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'currenchan', name: 'カレンチャン', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/bbd93a3db4c54416bb3f7792689d106b/currenchan_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'daiichiruby', name: 'ダイイチルビー', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/4899801222cd459488b99fb94f716e65/daiichiruby_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'daitakuhelios', name: 'ダイタクヘリオス', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/decc332003964b6db79967dda717fee6/daitakuhelios_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'daiwascarlet', name: 'ダイワスカーレット', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/bc82096dd018407690fcbca17a20ae18/daiwascarlet_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'specialweek', name: 'スペシャルウィーク', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/2e5d34d593f5460caf8045671798d4e4/specialweek_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'silencesuzuka', name: 'サイレンススズカ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/3192b6b2ec81493ca2cdb901f31fabab/silencesuzuka_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'tokaiteio', name: 'トウカイテイオー', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/cadcd418eba148898a2621f878da87ea/tokaiteio_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'maruzensky', name: 'マルゼンスキー', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/caaeb3fdb43a4056943b2849e43402fb/maruzensky_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'fujikiseki', name: 'フジキセキ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/ce7748228f1944deab2d263f2f527638/fujikiseki_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'oguricap', name: 'オグリキャップ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/0095545db55e4030b50f0e58604e0520/oguricap_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'goldship', name: 'ゴールドシップ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/b6b50669a65f4c3ba0434206532c561d/goldship_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'vodka', name: 'ウオッカ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/8ac7b341d0d94da092a76dbb568581d6/vodka_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'grasswonder', name: 'グラスワンダー', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/aee4caf3e84244a492c21e6e8fe49b6b/grasswonder_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'hishiamazon', name: 'ヒシアマゾン', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/eb835aeb20374658ab98d6fc2b38f538/hishiamazon_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'mejiromcqueen', name: 'メジロマックイーン', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/b54190968d3644ecb42a708d0f6a084c/mejiromcqueen_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'elcondorpasa', name: 'エルコンドルパサー', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/d29681f88e0746508ab45ed552f9ae6e/elcondorpasa_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'tmoperao', name: 'テイエムオペラオー', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/64289b3630bf46d3aa4a97039b3923f3/tmoperao_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'naritabrian', name: 'ナリタブライアン', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/cdf5701489cb4d3da86b76de708418db/naritabrian_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'symbolirudolf', name: 'シンボリルドルフ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/ff6ad42816db4b82bb7393c7b987f817/symbolirudolf_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'seiunsky', name: 'セイウンスカイ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/97e45e2926de43e79c55295a7378c2d4/seiunsky_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'kitasanblack', name: 'キタサンブラック', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/94e780747b6c447fa48c99052cd7e2de/kitasanblack_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'satonodiamond', name: 'サトノダイヤモンド', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/75073e52e88c432f80a4e60333884f77/satonodiamond_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'taikishuttle', name: 'タイキシャトル', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/02bf653dc681485c958cff8768ca5fd5/taikishuttle_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'hayakawatazuna', name: '駿川たづな', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/10329e7971be44b99741c89492ef9d06/hayakawatazuna_list.png', category: 'other', selected: true, weight: 1 },
    { id: 'hosoejunko', name: '細江純子', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/9a5022f5c7484b20a86870eccce61c45/hosoejunko_list.png', category: 'other', selected: true, weight: 1 },
    { id: 'kiryuinaoi', name: '桐生院葵', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/e23de710d8e14542be1e9b9a1428c8c4/kiryuinaoi_list.png', category: 'other', selected: true, weight: 1 },
    { id: 'otonashietsuko', name: '乙名史悦子', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/4e17a943ad134d08ae12a4d67ee85114/otonashietsuko_list.png', category: 'other', selected: true, weight: 1 },
    // 追加キャラクター (100体)
    { id: 'dantsuflame', name: 'ダンツフレーム', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/9367bd41586947ecb0d7d83e9a16e431/dantsuflame_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'daringheart', name: 'ダイリンハート', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/837386c50db047d9b723a27440b35e58/daringheart_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'darleyarabian', name: 'ダーレーアラビアン', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/3554c8e804a342c0840890b055643d60/darleyarabian_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'dreamjourney', name: 'ドリームジャーニー', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/7ec1f7674eb34eafb8bc4cec6e8ab343/dreamjourney_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'duramente', name: 'ドゥラメンテ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/5ba2e3004acd4cdc8d9b0e7f0bf7cbe0/duramente_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'durandal', name: 'デュランダル', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/54adb7d4190642e4a9d29b6e8da8ddf8/durandal_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'eishinflash', name: 'エイシンフラッシュ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/2e87602a093f4e6ab13a3d5215f63038/eishinflash_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'espoircity', name: 'エスポワールシチー', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/6c6e4c6387bc40fd9a3f63e2b414f62a/espoircity_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'fenomeno', name: 'フェノーメノ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/d2d0f8f360cb46109a7acae5ce630be9/fenomeno_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'finemotion', name: 'ファインモーション', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/6bd53dfa4a6a49dc8478e225943ee0e3/finemotion_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'furioso', name: 'フリオーソ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/3de9f0dba51749d1828aee4adaf39549/furioso_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'fusaichipandora', name: 'フサイチパンドラ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/be5f9ba589d34592bc05a22e347c7a77/fusaichipandora_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'gentildonna', name: 'ジェンティルドンナ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/c3c0c457704a447c9061d1631588f2c8/gentildonna_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'godolphinbarb', name: 'ゴドルフィンバルブ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/a5ef307acc8f4ee3b88e7d7cffefe9d4/godolphinbarb_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'goldcity', name: 'ゴールドシティ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/096e7b2787ea40c9882f5a797d545d23/goldcity_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'granalegria', name: 'グランアレグリア', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/186354558c8c4dec98c37d6e67cc2464/granalegria_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'haiseiko', name: 'ハイセイコー', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/9649d25c93c2409a85cd9af0444fa051/haiseiko_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'happymik', name: 'ハッピーミーク', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/2a04bc169cf4436a93ab79f19c19b966/happymik_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'haruurara', name: 'ハルウララ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/ab34862a2ae0421ca01b42c161761f21/haruurara_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'hishiakebono', name: 'ヒシアケボノ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/c6ecf416eb414e24ac53bacd057fd2ad/hishiakebono_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'hishimiracle', name: 'ヒシミラクル', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/13f8dd98962c42d6b33644fe5f59595d/hishimiracle_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'hokkotarumae', name: 'ホッコータルマエ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/f53900276c384a5884e81476465bcbe0/hokkotarumae_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'ikunodictus', name: 'イクノディクタス', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/fc93e52618534b6c88eddf78570851aa/ikunodictus_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'inarione', name: 'イナリワン', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/3f76404022de4285b5af8e9bb1a5648f/inarione_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'inesfujin', name: 'アイネスフウジン', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/aa6edad3e72244a08b0299e5435f35b8/inesfujin_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'junglepocket', name: 'ジャングルポケット', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/e3f353e616aa490d988b909e8acb237b/junglepocket_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'kashimotoriko', name: '樫本理子', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/a7eb3c955f444b25ab17259f9de1a58a/kashimotoriko_list.png', category: 'other', selected: true, weight: 1 },
    { id: 'katsuragiace', name: 'カツラギエース', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/28479a70523e471cb84ac10b4b1ff114/katsuragiace_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'kawakamiprincess', name: 'カワカミプリンセス', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/e4e38a1329b94e4391cb1be2455ad120/kawakamiprincess_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'kinghalo', name: 'キングヘイロー', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/eb01acda524d4f28b38d4d699fbaa47e/kinghalo_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'k-s-miracle', name: 'ケイエスミラクル', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/2b2b6f02405e43f1a65592a370401109/k-s-miracle_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'lighthello', name: 'ライトハロー', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/5fb25172f3c8483883662c1009695306/lighthello_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'littlecocon', name: 'リトルココン', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/55922c4a12ed4fc2a7cb84b158c7ce1d/littlecocon_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'lovesonlyyou', name: 'ラブズオンリーユー', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/abbfc5bb547f4d03a886e10f1072d603/lovesonlyyou_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'luckylilac', name: 'ラッキーライラック', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/781af99cf1d84e63bc2026538f0a55a5/luckylilac_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'manhattancafe', name: 'マンハッタンカフェ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/ca853da2596e4a339222b293579fa889/manhattancafe_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'marveloussunday', name: 'マーベラスサンデー', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/b3af712d8ccf4c4094de92e2aaffc3c4/marveloussunday_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'matikanefukukitaru', name: 'マチカネフクキタル', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/77837c8a379c452aa44e55a3b36a07c9/matikanefukukitaru_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'matikanetannhauser', name: 'マチカネタンホイザー', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/e7c65191769c49acab4fbbbf43887de1/matikanetannhauser_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'mayanotopgun', name: 'マヤノトップガン', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/653ba32321a240728d848fe16b8660a9/mayanotopgun_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'meishodoto', name: 'メイショウドトウ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/c45afaaf78dd481c9e918e50e6181134/meishodoto_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'mejiroardan', name: 'メジロアルダン', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/5882fc435fab47278954eb9cd756f7a2/mejiroardan_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'mejirobright', name: 'メジロブライト', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/e97d5a3de746495593b33c225e2902e5/mejirobright_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'mejirodober', name: 'メジロドーベル', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/35293ceb39e54f9c8ebfb4407dc4eb48/mejirodober_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'mejiropalmer', name: 'メジロパーマー', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/54e5614a3eac44e6a0e8b4f4a2e3ed4d/mejiropalmer_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'mejiroramonu', name: 'メジロラモーヌ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/5d6e67035f7f4fcca64d9ed93b0ee241/mejiroramonu_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'mejiroryan', name: 'メジロライアン', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/48ba7bf78f364f819e141d8e54594a8e/mejiroryan_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'mihonobourbon', name: 'ミホノブルボン', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/480c33efca85474aa5818d01a4b1e59c/mihonobourbon_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'mrcb', name: 'ミスターシービー', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/3488578cbbb04e63988ad45d74795cde/mrcb_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'nakayamafesta', name: 'ナカヤマフェスタ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/5720bd42899f47499c079d5cc2458e50/nakayamafesta_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'naritataishin', name: 'ナリタタイシン', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/4371cd67a6e04442b7d9e03626aa39da/naritataishin_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'naritatoproad', name: 'ナリタトップロード', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/3f60d51fd01149148b6f7b59997632b2/naritatoproad_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'neouniverse', name: 'ネオユニヴァース', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/10f27dc4dfd0425d9dab1b46d6d50690/neouniverse_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'nicenature', name: 'ナイスネイチャ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/edb0ea3aa20248799927528bc8726e08/nicenature_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'nishinoflower', name: 'ニシノフラワー', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/acff3a5cc385458383764856832a82c5/nishinoflower_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'noreason', name: 'ノーリーズン', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/4d848a9d09eb4d4996321debd8c22c8c/noreason_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'northflight', name: 'ノースフライト', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/950f5f8d81df4d9b97a9cc2361b632be/northflight_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'orfevre', name: 'オルフェーヴル', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/1a5c8514113b4c1dba972e9508e0ed78/orfevre_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'rheinkraft', name: 'ライインクラフト', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/cfd166d87db64907b4ffd176f50af1cd/rheinkraft_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'riceshower_01', name: 'ライスシャワー', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/8c203ea11f8a47d0b58296fdcdadd82b/riceshower_01_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'rigantona', name: 'リガントナ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/829453808b664a469beec3d0def366c9/rigantona_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'royceandroyce', name: 'ロイスアンドロイス', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/81d3c0e88c144e8f9fa328f581ade44f/royceandroyce_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'saintlite', name: 'セイントライト', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/6fe1f0532dcb4d7b9afb1f25c21744ee/saintlite_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'sakurabakushino', name: 'サクラバクシンオー', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/84bea2aa55464ce1814700575202f21a/sakurabakushino_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'sakurachitoseo', name: 'サクラチトセオー', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/3aa6c2887e5c48348a9ecf646d123dc1/sakurachitoseo_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'sakurachiyonoo', name: 'サクラチヨノオー', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/07f4b9a6a6984b74b0e9f4c06cff07f0/sakurachiyonoo_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'sakuralaurel', name: 'サクラローレル', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/37b9b1f564234e3ea98bfeddbe452848/sakuralaurel_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'samsonbig', name: 'サムソンビッグ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/37677b8ce6fd4196b32cea1f7efcd254/samsonbig_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'satakemei', name: '佐岳メイ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/55547e52d732465d8ee85d0f5f4b53be/satakemei_list.png', category: 'other', selected: true, weight: 1 },
    { id: 'satonocrown', name: 'サトノクラウン', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/749b7b5716904f79bb16749de4bdaff6/satonocrown_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'seekingthepearl', name: 'シーキングザパール', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/7ae751ce6dfd4cf08b6dc81b6e0526ab/seekingthepearl_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'shinkowindy', name: 'シンコウウインディ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/5ebd10d2a828409093747427da23ee19/shinkowindy_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'siriussymboli', name: 'シリウスシンボリ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/b5f37d052b064e868b9695b06bc67f41/siriussymboli_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'smartfalcon', name: 'スマートファルコン', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/7ceffc005e594501822ac3d58db4e1e1/smartfalcon_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'sononelfie', name: 'ソノエルフィー', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/f68afd4bf36643139bb7942c80b5be7f/sononelfie_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'soundsofearth', name: 'サウンズオブアース', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/b17330e872874656976f15d93b424a76/soundsofearth_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'speedsymboli', name: 'スピードシンボリ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/d64cf4d8702648c1bc2aa5c5a6d7afbd/speedsymboli_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'staygold', name: 'ステイゴールド', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/1ae64df3a200487b88facc86e7ffd103/staygold_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'stillinlove', name: 'スティルインラブ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/ce53c7d0280049c3b9f474955ef9e51b/stillinlove_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'sugarlights', name: 'シュガーライト', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/e1631cf19fec4940ace4e4adb7fbad07/sugarlights_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'supercreek', name: 'スーパークリーク', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/3316aa27ddf54fa0bb4af195af3e67de/supercreek_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'sweeptosho', name: 'スイープトウショウ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/5d243633c0ef415bb48702d0c8531308/sweeptosho_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'symbolikriss', name: 'シンボリクリスエス', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/cf2cb0069c144ff4ace3ba7f0c04b120/symbolikriss_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'tamamocross', name: 'タマモクロス', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/380fca1269d048abb5a0db0e01cc4ac0/tamamocross_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'taninogimlet', name: 'タニノギムレット', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/38ba273b41354eb2871ca785740107e5/taninogimlet_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'tapdancecity', name: 'タップダンスシチー', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/15937c6439c2407c845b8fe8bc9e1819/tapdancecity_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'tosenjordan', name: 'トーセンジョーダン', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/a4ed11cb612f4cc1ad6ea3c167c9ac85/tosenjordan_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'transcend', name: 'トランセンド', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/a3bed0aee9c04959a8086d09c8409b66/transcend_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'tsurugiryoka', name: 'ツルギリョーカ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/2f76d29b4f0a4ae5b047f3ed9f1016cf/tsurugiryoka_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'tsurumarutsuyoshi', name: 'ツルマルツヨシ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/549338befba74a278b03f1fb9e2d1e50/tsurumarutsuyoshi_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'tuckerbryne', name: 'タッカーブライン', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/08cdb7dce3a2419e876a1405306d4a0a/tuckerbryne_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'twinturbo', name: 'ツインターボ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/36e7e622a69b45f6b3d00bc0c9b48ab7/twinturbo_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'venuspark', name: 'ヴィーナスパーク', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/b2cd6bcb61014b5e9f51c1d9c07ffb09/venuspark_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'verxina', name: 'ヴェルシーナ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/427bf6bd17d844b383e332e2db60e782/verxina_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'vivlos', name: 'ヴィブロス', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/88bb264a970c4551b5fae492cd0518a1/vivlos_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'winningticket', name: 'ウイニングチケット', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/b3fb7ecb2a2d4529b788ce72cd10e4c6/winningticket_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'winvariation', name: 'ウインバリアシオン', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/c15373cabd854df7ae8c16be37c28db8/winvariation_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'wonderacute', name: 'ワンダーアキュート', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/0035d494d1d447a5b09f103ae0983b80/wonderacute_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'yaenomuteki', name: 'ヤエノムテキ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/caa3ad8e1507499ab727e27bd353f59c/yaenomuteki_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'yamaninzephyr', name: 'ヤマニンゼファー', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/e62bd533503649a785c537401292f159/yamaninzephyr_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'yukinobijin', name: 'ユキノビジン', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/5dcb22f3b1ad45778c9ecb4d44d4213f/yukinobijin_list.png', category: 'umamusume', selected: true, weight: 1 },
    { id: 'zennorobroy', name: 'ゼンノロブロイ', imageUrl: 'https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/61ce5a3a4d6b46018c8f68e3f503d9c6/zennorobroy_list.png', category: 'umamusume', selected: true, weight: 1 },
   ];
   
   // MicroCMSからの取得に失敗した場合のフォールバック
   export function getAllCharactersWithFallback(): Character[] {
    return allCharacters;
   }
   
   // 抽選ロジック
   export function performLottery(characters: Character[], count: number): Character[] {
    const selectedCharacters = characters.filter(char => char.selected);
   
    if (selectedCharacters.length === 0) {
      throw new Error('選択されたキャラクターがいません');
    }
   
    if (count > selectedCharacters.length) {
      throw new Error(`抽選人数が多すぎます。最大${selectedCharacters.length}人まで選択可能です。`);
    }
   
    // 重み付き抽選用の配列を作成
    const weightedPool: Character[] = [];
    selectedCharacters.forEach(char => {
      for (let i = 0; i < char.weight; i++) {
        weightedPool.push(char);
      }
    });
   
    // 重複なしでランダム抽選
    const shuffled = [...weightedPool].sort(() => Math.random() - 0.5);
    const uniqueResults: Character[] = [];
    const usedIds = new Set<string>();
   
    for (const char of shuffled) {
      if (!usedIds.has(char.id) && uniqueResults.length < count) {
        uniqueResults.push(char);
        usedIds.add(char.id);
      }
    }
   
    return uniqueResults;
   }
   
   // 画像URL生成ヘルパー
   export function generateImageUrl(imageId: string): string {
    return `https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/${imageId}/${imageId}_list.png`;
   }