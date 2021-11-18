import { useEffect } from "react";

import Repository from "./Repository";

const Repositories = ({value}) => {

    return (
        <view>
            {   
                value.repos.map(rep => {
                    return (
                        <Repository repos={rep} />
                    )
                })
            }
        </view>
    );
}

export default Repositories;