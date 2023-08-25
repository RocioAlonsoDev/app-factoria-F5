// import UseFetch from "../../services/UseFetch";
import UserCardAtom from "../../atoms/UserCardAtom/UserCardAtom";
import "./userCardsList.css";

function UserCardsList() {
//   const url = "https://disease.sh/v3/covid-19/";
//   const { data } = UseFetch(url + "countries");

//Prueba hardcodeada
const data = [
    { id: 1, user_profile_name: "Elsa Pato", completed: "50" },
    { id: 2, user_profile_name: "Daisy Donald", completed: "75" },
    { id: 3, user_profile_name: "Pio Sexto", completed: "100" },
    { id: 4, user_profile_name: "Lucas Looney", completed: "25" },
    { id: 5, user_profile_name: "Elsa Patacky", completed: "50" },
    { id: 4, user_profile_name: "Conde Pátula", completed: "25" },
    // ...
  ];

  const userList = data?.sort((a, b) => b.cases - a.cases);

  return (
    <>
      {userList?.map((user) => (
        <UserCardAtom
          user_profile_name={user.user_profile_name}
          completed={user.completed}

          key={user.id}

        ></UserCardAtom>
      ))}
    </>
  );
}

export default UserCardsList;