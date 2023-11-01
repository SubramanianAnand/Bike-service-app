import axios from "axios";
import authHeader from "../auth_header";

const API_URL = "http://localhost:8088/admin/car-func/";

class CarService {
  async getAllBrands() {
    try {
      const response = await axios
        .get(API_URL + "findAllBrands");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }

  async getCarsByBrand(brand) {
    console.log("Get Brand: " + brand);
    try {
      const response = await axios
        .post(API_URL + "findByBrand", { brand });
      return response.data.cars;
    } catch (err) {
      console.log(err);
    }
  }

  async getAllCars() {
    try {
      const response = await axios
        .get(API_URL + "findAll");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }

  async addCar(name, brand) {
    try {
      const response = await axios
        .post(
          API_URL + "addCar",
          {
            name,
            brand,
          },
          {
            headers: authHeader(),
          }
        );
      return response.data.message;
    } catch (err) {
      console.log(err);
    }
  }

  async deleteCar(carId) {
    try {
      const res = await axios
        .delete(API_URL + `deleteCar/${carId}`, {
          headers: authHeader(),
        });
      console.log(res);
      return res.data.message;
    } catch (err) {
      console.log(err);
    }
  }

  async updateCar(carId, brand) {
    try {
      const response = await axios
        .patch(
          API_URL + `updateCar/${carId}`,
          {
            brand,
          },
          {
            headers: authHeader(),
          }
        );
      return response.data.message;
    } catch (err) {
      console.log(err);
    }
  }

  async findCarById(carId) {
    try {
      const response = await axios
        .get(API_URL + `findByCar/${carId}`);
      return response.data.response;
    } catch (err) {
      console.log(err);
    }
  }
}

export default new CarService();
