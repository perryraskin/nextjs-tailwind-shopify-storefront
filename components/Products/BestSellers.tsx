import { NextPage } from "next"

interface Props {}

const BestSellers: NextPage<Props> = ({}) => {
  return (
    <section className="body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="w-full mb-6 lg:mb-0">
            <h2 className="font-medium title-font mb-2">Best Sellers</h2>
            {/* <div className="h-1 w-20 bg-blue-500 rounded" /> */}
          </div>
          {/* <p className="lg:w-1/2 w-full leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p> */}
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://source.unsplash.com/featured/?tshirt"
                alt="content"
              />
              <h3 className="tracking-widest uppercase text-blue-500 text-xs font-medium title-font">
                Breathable Tops
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                T-Shirt
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://source.unsplash.com/featured/?sneakers"
                alt="content"
              />
              <h3 className="tracking-widest uppercase text-blue-500 text-xs font-medium title-font">
                Fitness Gear
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Sneakers
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://source.unsplash.com/featured/?necktie"
                alt="content"
              />
              <h3 className="tracking-widest uppercase text-blue-500 text-xs font-medium title-font">
                Dress to Impress
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Tie
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://source.unsplash.com/featured/?dresses"
                alt="content"
              />
              <h3 className="tracking-widest uppercase text-blue-500 text-xs font-medium title-font">
                Beauty
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Gown
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestSellers
