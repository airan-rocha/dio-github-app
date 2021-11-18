// import { useEffect } from "react";

import Repository from "./Repository";

const Repositories = ({value, pagesRepo, setPagesRepo}) => {
    
    // setPagesRepo(1);

    const qntPaginas = () => {
        return Math.floor((value.public_repos / 30) + 1);
    }

    console.log(pagesRepo);
    console.log(qntPaginas())

    return (
        <div>
            <div>
                <button onClick={() => setPagesRepo(pagesRepo > 1? pagesRepo - 1 : 1)}>-</button>
                {` ${pagesRepo} de ${qntPaginas()} `}
                <button onClick={() => setPagesRepo(pagesRepo < qntPaginas()? pagesRepo + 1 : pagesRepo)}>+</button>
            </div>
            {   
                value.repos.map((rep, i) => {
                    return (
                        <Repository repos={rep} />
                    )
                })
            }
        </div>
    );
}

export default Repositories;