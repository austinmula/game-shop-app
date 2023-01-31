// import "./admin.scss";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createGame } from "../../actions/games";

export default function AddMovieForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await dispatch(createGame(data));
  };

  return (
    <div className="game ">
      <div className="game-form ">
        <h3>Add New Game</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap -mx-3 gap-4">
            <div className="w-full mt-6 px-3  md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
                htmlFor="game-name"
              >
                Game Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="game-name"
                type="text"
                placeholder="Enter game Name"
                {...register("name")}
              />
            </div>

            <div className="w-full px-3  md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
                htmlFor="game-image"
              >
                Game Image
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="game-image"
                type="text"
                placeholder="Enter game Image url"
                {...register("image")}
              />
            </div>

            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
                htmlFor="game-description"
              >
                Game Description
              </label>
              <textarea
                className="appearance-none col-span-3 resize-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white "
                id="game-description"
                type="text"
                placeholder="Enter brief game description"
                {...register("description")}
              ></textarea>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2 ">
            <div className="w-full md:w-1/3 px-3  md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
                htmlFor="publisher"
              >
                Publisher
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-100 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white "
                id="publisher"
                type="text"
                placeholder="publisher name"
                {...register("publisher")}
              />
            </div>
            <div className="w-full md:w-1/3 px-3  md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
                htmlFor="rating"
              >
                Rating
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white "
                  id="rating"
                  {...register("rating")}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3  md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
                htmlFor="price"
              >
                Price
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white "
                id="price"
                type="number"
                placeholder="0"
                {...register("price")}
              />
            </div>
          </div>

          {/* Console */}
          <div className="flex flex-wrap gap-x-5">
            <label
              className="block w-full uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
              htmlFor="game-consoles"
            >
              Console
            </label>
            <div className="flex">
              <div class="flex justify-end items-center">
                <input
                  type="checkbox"
                  value="3"
                  class="w-4 h-4 border-gray-300 rounded"
                  {...register("consoles")}
                />
                <label
                  for="disabled-checked-checkbox"
                  class="text-xs  ml-2 font-medium text-gray-100  min-w-fit"
                >
                  PlayStation 5
                </label>
              </div>
            </div>
            <div className="flex">
              <div class="flex justify-end items-center">
                <input
                  type="checkbox"
                  value="1"
                  class="w-4 h-4 border-gray-300 rounded"
                  {...register("consoles")}
                />
                <label
                  for="disabled-checked-checkbox"
                  class="text-xs  ml-2 font-medium text-gray-100  min-w-fit"
                >
                  PlayStation 4
                </label>
              </div>
            </div>
            <div className="flex">
              <div class="flex justify-end items-center">
                <input
                  type="checkbox"
                  value="2"
                  class="w-4 h-4 border-gray-300 rounded"
                  {...register("consoles")}
                />
                <label
                  for="disabled-checked-checkbox"
                  class="text-xs  ml-2 font-medium text-gray-100  min-w-fit"
                >
                  PC Game
                </label>
              </div>
            </div>
          </div>

          {/* Categories */}

          <div className="flex flex-wrap gap-x-5">
            <label
              className="block w-full uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
              htmlFor="game-consoles"
            >
              Category
            </label>
            <div className="flex">
              <div class="flex justify-end items-center">
                <input
                  type="checkbox"
                  value="1"
                  class="w-4 h-4 border-gray-300 rounded"
                  {...register("category")}
                />
                <label
                  for="disabled-checked-checkbox"
                  class="text-xs  ml-2 font-medium text-gray-100  min-w-fit"
                >
                  shooter
                </label>
              </div>
            </div>
            <div className="flex">
              <div class="flex justify-end items-center">
                <input
                  type="checkbox"
                  value="2"
                  class="w-4 h-4 border-gray-300 rounded"
                  {...register("category")}
                />
                <label
                  for="disabled-checked-checkbox"
                  class="text-xs  ml-2 font-medium text-gray-100  min-w-fit"
                >
                  adventure
                </label>
              </div>
            </div>
            <div className="flex">
              <div class="flex justify-end items-center">
                <input
                  type="checkbox"
                  value="3"
                  class="w-4 h-4 border-gray-300 rounded"
                  {...register("category")}
                />
                <label
                  for="disabled-checked-checkbox"
                  class="text-xs  ml-2 font-medium text-gray-100  min-w-fit"
                >
                  action
                </label>
              </div>
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
