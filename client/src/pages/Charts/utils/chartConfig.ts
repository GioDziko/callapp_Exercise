import { IUser } from "../../../interfaces/interface";

export function chartConfig(users: IUser[]) {
  const cities = [...new Set<string>(users.map((user) => user.address.city))];

  const data = cities.map((city) => ({
    type: city,
    value: users.filter((user) => user.address.city === city).length,
  }));

  return {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      style: {
        fontSize: 14,
        textAlign: "center",
      },
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };
}
