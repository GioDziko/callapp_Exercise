import axios from "axios";
export async function fetchUsers() {
  const url = "http://localhost:3001/api/v1/users";
  const { data } = await axios.get(url);
  return data;
}
