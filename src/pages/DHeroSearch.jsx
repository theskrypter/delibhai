import { useState } from "react";
import toast from "react-hot-toast";
import { BiSearchAlt } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import Select from "../components/forms/Select";
import Button from "../components/ui/Button";
import { SearchOption } from "../features/DHero/index";
import Container from "../layouts/Container";
import Title from "../layouts/Title";

const divisions = ["ঢাকা", "চট্টগ্রাম", "রাজশাহী", "খুলনা", "রংপুর"];
export default function DHeroSearch() {
  const { vehicle } = useParams();
  console.log(vehicle);

  const [activeOption, setActiveOption] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Title color="black" title="ডেলিভাই হিরো (সার্চ)" />
      <Container>
        <div className="w-fit mx-auto mb-8">
          <SearchOption
            fill={activeOption === 1}
            text="Location Tracking (Nearest)"
            handleSelectSearchOption={() => {
              setActiveOption(1);
              toast.error(
                'এই সার্ভিসটি আপডেটের কাজ চলমান! দয়া করে "Manual Search" অপশনটি নির্বাচন করুন',
                {
                  duration: 4000,
                  position: "top-center",
                  style: {
                    backgroundColor: "#efef8d",
                  },
                }
              );
            }}
          />
          <SearchOption
            fill={activeOption === 2}
            text="Manual Search"
            handleSelectSearchOption={() => setActiveOption(2)}
          />
        </div>

        {activeOption === 1 && (
          <p className="text-center text-3xl my-32">Not Available</p>
        )}

        {activeOption === 2 && (
          <form
            className="max-w-[500px] mx-auto text-gray-500 mb-6"
            onClick={handleSubmit}
          >
            <Select options={divisions} selected="বিভাগ নির্বাচন করুন" />
            <Select options={divisions} selected="জেলা নির্বাচন করুন" />
            <Select options={divisions} selected="উপজেলা নির্বাচন করুন" />
            <Select options={divisions} selected="ইউনিয়ন নির্বাচন করুন" />
            <Select options={divisions} selected="ওয়ার্ড নম্বর নির্বাচন করুন" />
            <Select options={divisions} selected="গ্রাম নির্বাচন করুন" />
            <Link to="/search">
              <Button type="submit" value="Search" icon={<BiSearchAlt />} />
            </Link>
          </form>
        )}
      </Container>
    </>
  );
}
