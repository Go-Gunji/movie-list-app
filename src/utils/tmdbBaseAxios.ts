import axios from "axios";

// TMDBからのbaseURLリクエストを作成
// axiosのインスタンスを作成することでbaseURLを共通化して利用する
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
