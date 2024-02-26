import React from "react";
import styles from "../../../styles/styles";
import CountDown from "./CountDown";
const EventCard = ({ active }) => {
  return (
    <div
      className={`w-full block bg-white rounded-lg ${
        active ? "Chưa có chương trình" : "mb-12"
      } lg:flex p-2 mb-12`}
    >
      <div className="w-full lg:w-[35%] m-auto">
        <img
          src="https://www.hangngoainhap.com.vn/images/202210/goods_img/409-p2-1666689521.jpg"
          alt=""
        />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>
          Men vi sinh BioGaia Protectis Baby Drops bổ sung lợi khuẩn cho đường
          tiêu hóa (5ml)
        </h2>
        <p>
          Men vi sinh BioGaia Protectis Baby Drops bổ sung vi khuẩn có lợi cho
          đường tiêu hóa, hỗ trợ duy trì và cải thiện hệ vi sinh đường ruột,
          giúp đường ruột khỏe mạnh, phòng ngừa nhiễm khuẩn ruột và các triệu
          chứng rối loạn tiêu hóa. Sản phẩm với thành phần 100% tự nhiên, là
          Probiotic duy nhất trên thế giới có nguồn gốc từ sữa mẹ. Được chứng
          nhận an toàn cho cả phụ nữ mang thai và trẻ sơ sinh. Sản phẩm sản xuất
          tại Thụy Điển. Lactobacillus reuteri Protectis (BioGaia) có nguồn gốc
          được phân lập từ sữa mẹ, là một cư dân tự nhiên trong cơ thể con
          người, nó ức chế hầu hết các vi khuẩn có hại, nhưng lại không ức chế
          bất kỳ một vi khuẩn có lợi nào. Men vi sinh BioGaia 5ml bổ sung 100
          triệu tế bào lợi khuẩn sống Lactobacillus reuteri DSM 17938 giúp cân
          bằng hệ vi sinh đường ruột, bảo vệ hệ tiêu hóa khỏe mạnh cùng với
          những lợi ích sức khỏe tuyệt vời.
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              632.000đ
            </h5>
            <h5 className="font-[500] text-[18px] text-[#d55b45] pl-2 line-through">
              780.000đ
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            62 sản phẩm đã bán
          </span>
        </div>
        <CountDown />
      </div>
    </div>
  );
};

export default EventCard;
