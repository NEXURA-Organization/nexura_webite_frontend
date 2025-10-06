import Container from "./ui/Container";
import Button from "./ui/Button";

export default function Newsletter() {
  return (
    <section className="section-padding bg-dark my-6">
      <Container>
        <div className="relative rounded-2xl border border-white/10 shadow-[inset_0_2px_10px_rgba(255,255,255,0.05),0_8px_25px_rgba(0,0,0,0.7)] p-8 w-full  mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
          
          {/* Left: Heading */}
          <div className="text-center md:text-left md:max-w-md flex-shrink-0">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-2 bg-gradient-to-r from-[#7520E3] via-[#AB6FFA] to-[#6D2AC3] bg-clip-text text-transparent">
              Stay Up To Date!
            </h2>
            <p className="text-gray-400">
              Stay informed with Nexura’s latest news and offers.
            </p>
          </div>

          {/* Right: Input + Button pill */}
          <form className="w-full md:max-w-md">
            <div className="flex items-stretch rounded-full border border-white/10 bg-dark/70 overflow-hidden shadow-inner relative">
              <input
                type="email"
                placeholder="youremail@gmail.com"
                className="flex-1 px-6 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm md:text-base"
                required
              />
              <Button
                type="submit"
                className="px-6 py-3 text-sm md:text-base font-medium text-white bg-gradient-to-r from-[#8B5CF6] via-[#FB7185] to-[#FAB570] hover:opacity-90 transition whitespace-nowrap absolute right-0"
              >
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
