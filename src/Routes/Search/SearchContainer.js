import React from "React";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component{
    state = {
        movieResults : null,
        tvResults: null,
        searchTerm: "",
        error:null,
        loading: false
    };

    render() {
        const { movieResults, tvResults, searchTerm, error,loading } = this.state;
        return <SearchContainer 
                    movieResults={movieResults}
                    tvResults={tvResults}
                    searchTerm={searchTerm}
                    error={error}
                    loading={loading}
                />
    }
}