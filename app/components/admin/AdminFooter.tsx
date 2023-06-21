import Container from "../Container";

const AdminFooter = () => {
    return (

        <div className="bg-indigo-900 w-full flex md:flex-row flex-col justify-around items-start p-1 block">
          <Container>
          <div className="inline-block text-cyan-500">
            &copy; Casas 2023
                    Saara Bilyour, Williams Mache Kemgni, Hicham Oulkourri & Beatrice Trudel
          </div>
          </Container>
        </div>
    );
}

export default AdminFooter;