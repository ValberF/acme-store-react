import { createServer, Model } from "miragejs"
import products from "../src/helpers/utils/products";

export function makeServer({ environment = "test" } = {}) {
    let server = createServer({
        routes() {
            this.namespace = "api"
            this.urlPrefix = "http://api.localhost:3000"

            this.get("/products", () => {
                return products;
            })
        },
    })

    return server
}
