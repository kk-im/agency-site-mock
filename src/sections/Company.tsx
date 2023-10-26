import Button from "../components/Button";

export default function Company() {
  return (
    <section className="text-white">
      {/* Join */}
      <div>
        <div className="gap-3">
          <h2 className="text-xl font-bold mb-2 w-full">Join us</h2>
          <div className="grid grid-cols-8 ">
            <p className="mb-6 col-start-1 text-sm col-end-5">
              For unlimited time off, remote-first team and free lunches. What
              more could you ask for?
            </p>
            <Button styles="bg-stone-200 text-black col-start-6 h-10 text-sm flex justify-center col-end-8">
              <p>View open positions</p>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
