// Importando useApi (mi custom hooks para consumir una API REST)
import useApi from "./components/useApi";
import "./App.css";

function App() {
  let url_api = "https://reqres.in/api/users?page=1";
  const { data, error, loading } = useApi(url_api);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <h1>Mi Custom Hook para consumir una API REST</h1>
      <div className="container">
        <ul className="user-list">
          {data &&
            data.map((user) => (
              <li key={user.id} className="user-item">
                <img
                  src={user.avatar}
                  alt={user.first_name}
                  className="user-avatar"
                />
                <div className="user-details">
                  <p className="user-details__name">
                    Nombre: {user.first_name}
                  </p>
                  <p className="user-details__email">Email: {user.email}</p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default App;
