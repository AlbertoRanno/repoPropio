import React from 'react';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
import { Link, Route, Switch } from "react-router-dom";

function ContentRowCenter(){
    return (
      <div className="row">
        {/*<!-- Last Movie in DB -->*/}
        <Switch>
          <Route
            path="/LastMovieInDb"
            component={LastMovieInDb}
            exact="true"
          ></Route>
        </Switch>
        {/*<!-- End content row last movie in Data Base -->*/}

        {/*<!-- Genres in DB -->*/}
        <Switch>
          <Route path="/GenresInDb" component={GenresInDb} exact="true"></Route>
        </Switch>
      </div>
    );
}

export default ContentRowCenter;

