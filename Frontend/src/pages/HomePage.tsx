import { FaHeadphonesSimple } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdOutlineFileUpload } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import PATH from "../core/constants/RoutePaths";
import { v4 as uuidv4 } from "uuid";
export default function HomePage() {
  const navigate = useNavigate();
  const createNewNote = () => {
    navigate(PATH.NOTEBOOK + "/" + uuidv4());
  };

  return (
    <div className="bg-primary h-[calc(100vh-72px)] text-zinc-200 sticky top-0">
      <div className="max-w-7xl mx-auto pt-10">
        <h1 className="text-6xl font-semibold mb-40">
          Chào mừng bạn đến với Apec Assistant
        </h1>
        <div className="grid grid-cols-3 gap-6">
          <div className="feature-card bg-[#1a1d22] p-6 rounded-lg">
            <div className="w-16 h-16 rounded-full mb-5 bg-[#4259ff]/10 flex">
              <FaHeadphonesSimple className="text-[#4259ff] m-auto text-3xl" />
            </div>
            <h1 className="mb-4 text-xl font-bold text-zinc-300">
              Có được những hiểu biết mới về tài liệu bất kỳ
            </h1>
            <p className="text-zinc-300">
              Chuyển đổi tài liệu phức tạp thành các định dạng dễ hiểu như bản
              Tổng quan bằng âm thanh, Câu hỏi thường gặp hoặc Tài liệu tóm tắt
            </p>
          </div>

          <div className="feature-card bg-[#1a1d22] p-6 rounded-lg">
            <div className="w-16 h-16 rounded-full mb-5 bg-[#4259ff]/10 flex">
              <MdOutlineFileUpload className="text-[#4259ff] m-auto text-3xl" />
            </div>
            <h1 className="mb-4 text-xl font-bold text-zinc-300">
              Một chatbot dựa trên các nguồn của bạn
            </h1>
            <p className="text-zinc-300">
              Tải tài liệu lên và NotebookLM sẽ trả lời các câu hỏi chi tiết
              hoặc hiển thị những thông tin chi tiết quan trọng
            </p>
          </div>

          <div className="feature-card bg-[#1a1d22] p-6 rounded-lg">
            <div className="w-16 h-16 rounded-full mb-5 bg-[#4259ff]/10 flex">
              <HiMiniUserGroup className="text-[#4259ff] m-auto text-3xl" />
            </div>
            <h1 className="mb-4 text-xl font-bold text-zinc-300">
              Chia sẻ thông tin chi tiết của bạn
            </h1>
            <p className="text-zinc-300">
              Thêm các tài nguyên quan trọng vào một sổ tay và chia sẻ với tổ
              chức của bạn để tạo cơ sở kiến thức cho nhóm
            </p>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 h-44">
        <button
          className="flex items-center gap-2 bg-zinc-200 p-2 px-5 rounded-full text-zinc-800 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          onClick={createNewNote}
        >
          <FiPlus />
          <p>Tạo chat mới</p>
        </button>
        <div className="homepage-plus-gradient1"></div>
        <div className="homepage-plus-gradient2"></div>
        <div className="homepage-plus-gradient3"></div>
      </div>
    </div>
  );
}
