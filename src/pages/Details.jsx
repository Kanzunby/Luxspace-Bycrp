import { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import useAsync from "../helpers/hooks/useAsync";
import ProductDetails from "../parts/Details/ProductDetails";
import Suggestion from "../parts/Details/Suggestion";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Sitemap from "../parts/Sitemap";
import { useParams } from "react-router-dom";
import fetch from "../helpers/fetch/index";
import useScrollToTop from "../helpers/hooks/useScrollToTop";
import Documents from "../parts/Documents";
import PageError from "../parts/PageError";

function LoadingProductDetail() {
  return (
    <section className="container mx-auto">
      <div className="flex flex-wrap my-4 md:my-12">
        <div className="w-full md:hidden px-4">
          <div className="w-80 h-16 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-40 h-4 bg-gray-300 animate-pulse rounded-full"></div>
        </div>
        <div className="flex-1">
          <div className="slider">
            <div className="thumbnail">
              {Array(5)
                .fill()
                .map((_, index) => {
                  return (
                    <div className="px-4 relative card group" key={index}>
                      <div
                        className="rounded-xl item bg-gray-300 animate-pulse"
                        style={{ width: 106, height: 106 }}
                      ></div>
                    </div>
                  );
                })}
            </div>
            <div className="preview">
              <div className="item rounded-lg h-full overflow-hidden">
                <div className="item bg-gray-300 animate-pulse rounded-lg overflow-hidden w-full h-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 px-4 md:p-6">
          <div className="w-80 h-16 bg-gray-300 animate-pulse rounded-full mb-4"></div>
          <div className="w-40 h-6 bg-gray-300 animate-pulse rounded-full mb-4"></div>
          <div className="w-40 h-10 bg-gray-300 animate-pulse rounded-full"></div>

          <hr className="my-8" />

          <div className="w-40 h-8 bg-gray-300 animate-pulse rounded-full mb-4"></div>
          <div className="w-full h-4 bg-gray-300 animate-pulse rounded-full mb-3"></div>
          <div className="w-full h-4 bg-gray-300 animate-pulse rounded-full mb-3"></div>
          <div className="w-full h-4 bg-gray-300 animate-pulse rounded-full mb-3"></div>
          <div className="w-full h-4 bg-gray-300 animate-pulse rounded-full mb-3"></div>
        </div>
      </div>
    </section>
  );
}

function LoadingSuggestion() {
  return (
    <section className="bg-gray-100 px-4 py-16">
      <div className="container mx-auto">
        <div className="flex-1 mb-4">
          <div className="w-60 h-6 bg-gray-300 animate-pulse rounded-full mb-2"></div>
          <div className="w-72 h-6 bg-gray-300 animate-pulse rounded-full mb-4"></div>
        </div>
        <div className="flex overflow-x-auto mb-4 -mx-3">
          {Array(4)
            .fill()
            .map((_, index) => {
              return (
                <div
                  className="px-3 flex-none"
                  style={{ width: 320 }}
                  key={index}
                >
                  <div className="rounded-xl p-4 pb-8 relative bg-white">
                    <div className="rounded-xl overflow-hidden card-shadow w-full h-36">
                      <div
                        className="bg-gray-300 animate-pulse rounded-lg h-full overflow-hidden mb-5"
                        style={{ width: 287, height: 150 }}
                      ></div>
                    </div>
                    <div className="w-44 h-4 w bg-gray-300 animate-pulse rounded-full mt-4"></div>
                    <div className="w-36 h-4 w- w- bg-gray-300 animate-pulse rounded-full mt-2"></div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default function Details() {
  useScrollToTop();

  const { idp } = useParams();
  const { data, error, run, isLoading, isError } = useAsync();

  useEffect(() => {
    run(fetch({ url: `/api/products/${idp}` }));
  }, [run, idp]);

  return (
    <Documents>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/123", name: "Office Room" },
          { url: "/categories/123/products/1234", name: "Details" },
        ]}
      />
      {isError ? (
        <PageError title="Product Not Found" body={error.errors.message} />
      ) : (
        <>
          {isLoading ? (
            <LoadingProductDetail />
          ) : (
            <ProductDetails data={data} />
          )}
          {isLoading ? (
            <LoadingSuggestion />
          ) : (
            <Suggestion data={data?.relatedProducts || {}} />
          )}
        </>
      )}

      <Sitemap />
      <Footer />
    </Documents>
  );
}
