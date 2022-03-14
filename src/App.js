import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import NowPlayingTrimmed from './components/NowPlayingTrimmed';
import './assets/css/styles.css';
import NowPlayingMoviesContextProvider from './contexts/NowPlayingMoviesContext';
import PopularMoviesContextProvider from './contexts/PopularMoviesContext';
import PopularTrimmed from './components/PopularTrimmed';
import NowPlaying from './components/NowPlaying';
import Popular from './components/PopularMovies';
import NotFound from './components/notFound'
import MovieDetailsContextProvider from './contexts/MovieDetailsContext';
import MovieDetails from './components/MovieDetails';
import SimilarMoviesContextProvider from './contexts/SimilarMoviesContext';
import SimilarMovies from './components/SimilarMovies';
import SearchBar from './components/SearchBar/SearchBar';
import Loader from './components/common/Loader';
// import SearchMoviesContextProvider from './contexts/SearchMoviesContext';
// import SearchResults from './components/SearchResults';
const SearchMoviesContextProvider = lazy(() => import('./contexts/SearchMoviesContext'))
const SearchResults = lazy(() => import('./components/SearchResults')) 

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <SearchBar />
          <NowPlayingMoviesContextProvider>
            <NowPlayingTrimmed />
          </NowPlayingMoviesContextProvider>
          <PopularMoviesContextProvider>
            <PopularTrimmed />
          </PopularMoviesContextProvider>
        </Route>
        <Route exact path="/now-in-theatres">
          <NowPlayingMoviesContextProvider>
            <NowPlaying />
          </NowPlayingMoviesContextProvider>
        </Route>
        <Route exact path="/popular-movies">
          <PopularMoviesContextProvider>
            <Popular />
          </PopularMoviesContextProvider>
        </Route>
        <Route path="/movie/:movie_id">
          <MovieDetailsContextProvider>
            <MovieDetails />
          </MovieDetailsContextProvider>
          <SimilarMoviesContextProvider>
            <SimilarMovies />
          </SimilarMoviesContextProvider>
        </Route>
        <Suspense fallback={<Loader />}>
          <Route path="/search/:query">
            <SearchMoviesContextProvider>
              <SearchResults />
            </SearchMoviesContextProvider>
          </Route>
        </Suspense>
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
