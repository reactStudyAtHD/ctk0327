import React from "react";
import {Link,Route} from "react-router-dom";

const data = {
    velopert: {
        name: '김민준',
        description: '리액트를 좋아하는 개발자'
    },
    gildong: {
        name: '홍길동',
        description: '고전 소설 홍길동전의 주인공'
    }
};

const Profile = ({match}) => {
        const {username}=match.params;
        const profile=data[username];
        if(!profile){
            return (
              <div>존재하지 않는 사용자입니다.</div>
            );
        }
        return (
            <div>
                <h3>
                    {username}({profile.name})
                </h3>
                <p>{profile.description}</p>
            </div>
        )
/*    return (
        <div>
            <h3>사용자 목록 : </h3>
            <ul>
                <li>
                    <Link to="/profile/velopert">velopert</Link>
                </li>
                <li>
                    <Link to="/profile/gildong">gildong</Link>
                </li>
            </ul>
            <Route path={"/profiles"} exact render={()=>(<div>사용자를 선택해 주세요.</div>)}/>
            <Route path={"/profiles/:username"} component={Profile}/>
        </div>
    )*/
};

export default Profile;