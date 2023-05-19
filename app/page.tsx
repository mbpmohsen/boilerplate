import {getMovieList} from "@/module/Movie/Service";
import dynamic from "next/dynamic";
import {MovieHeader} from "@/module/Movie/Component";

const MovieList = dynamic(() => import('@/module/Movie/Component/MovieList/MovieList'), { ssr: false });
export default async function Page() {
  const movieList = await getMovieList({ page: 1 });
  return (
      <div className="container mx-auto px-4">
        <MovieList movies={movieList} />
      </div>
  );
}
