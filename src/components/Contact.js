export default function Contact() {
  return (
    <>
      <center>
        <h1 className="font-bold text-2xl">Contact us Page</h1><br /><br />
        <form>
          <input className="m-2 p-2 border border-black" type="text" placeholder="Enter your name" /><br /><br />
          <input className="m-2 p-2 border border-black" type="text" placeholder="Enter your Message" /><br /><br />
          <button className="p-2 m-2 rounded-xl border border-black bg-gray-200">Submit</button>
        </form>
      </center>
    </>

  );
}