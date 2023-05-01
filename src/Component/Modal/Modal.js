import React from 'react';
import { MdOutlineAttachFile } from "react-icons/md";
const Modal = () => {
    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor="my-modal-3" className="btn">open modal</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle sticky right-2 top-2">✕</label>
                    <div className='bg-slate-200 p-5'>
                        <h1 className='grid justify-start text-lg text-black'>
                            SEND INQUIRY TO SUPPLIER
                        </h1>
                    </div>
                    <h3 className="grid justify-items-start text-lg mt-2">Product Name : Frock : Girls Casual Frocks</h3>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                        <input type="text" placeholder="Contact Name" className="input input-bordered w-full max-w-xs" />

                        <input type="text" placeholder="Company Name" className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Contact Number" className="input input-bordered w-full max-w-xs" />
                        <input type="Email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Select Country</option>
                            <option>Game of Thrones</option>
                            <option>Lost</option>
                            <option>Breaking Bad</option>
                            <option>Walking Dead</option>
                        </select>
                        <input type="text" placeholder="City" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <p className='grid justify-items-end mt-2 text-primary text-xs'>maximum 1000 character</p>
                    <textarea className="textarea textarea-bordered mt-3 w-full" placeholder="Describe Your Requirement"></textarea>
                    <h3 className='grid justify-items-start'>Please send me</h3>
                    <div className='grid grid-cols-2 gap-2'>
                        <div className="form-control grid justify-items-start">
                            <label className="label cursor-pointer">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <span className="label-text">
                                    Sample with specification sheet
                                </span>
                            </label>
                        </div>
                        <div className="form-control  grid justify-items-start">
                            <label className="label cursor-pointer">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <span className="label-text ms-2">
                                    Preferred payment terms
                                </span>
                            </label>
                        </div>
                        <div className="form-control  grid justify-items-start">
                            <label className="label cursor-pointer">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <span className="label-text ms-2">Latest Price Quotation</span>
                            </label>
                        </div>
                        <div className="form-control  grid justify-items-start">
                            <label className="label cursor-pointer">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <span className="label-text ms-2">
                                    Production Capacity</span>
                            </label>
                        </div>
                        <div className="form-control  grid justify-items-start">
                            <label className="label cursor-pointer">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <span className="label-text">Compliance certification required</span>
                            </label>
                        </div>
                        <div className="form-control  grid justify-items-start">
                            <label className="label cursor-pointer">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <span className="label-text ms-2">Product images</span>
                            </label>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                        <input type="text" placeholder="Quantity Required" className="input input-bordered w-full max-w-xs" />
                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Quantity Unit</option>
                            <option>Java</option>
                            <option>Go</option>
                            <option>C</option>
                            <option>C#</option>
                            <option>C++</option>
                            <option>Rust</option>
                            <option>JavaScript</option>
                            <option>Python</option>
                        </select>
                    </div>
                    <div className='flex justify-items-start text-start mt-2'>
                        Update <span><MdOutlineAttachFile className='text-primary text-xl'/></span> Attached Files (File Formate:Pdf, xl, doc, docx,xlsx, .txt and Maximum File Size: 5 MB )
                    </div>
                    <input type="file" className="file-input mt-3 file-input-bordered w-full " />
                    <p className='grid justify-items-start mt-3'>By submitting, you agree to our</p>
                    <button className='bg-sky-400 p-2 text-white mt-2 rounded px-2'>Send Inquire Now</button>
                </div>
            </div>
        </div>

        // <div>

        //     The button to open modal
        //     <label htmlFor="my-modal" className="btn">open modal</label>

        //     {/* Put this part before </body> tag */}
        //     <input type="checkbox" id="my-modal" className="modal-toggle" />
        //     <div className="modal">
        //         <div className="modal-box relative">
        //             <div className='bg-slate-200 p-5'>
        //                 <h1 className='grid justify-start text-lg text-black'>
        //                     SEND INQUIRY TO SUPPLIER
        //                 </h1>
        //             </div>
        //             <h3 className="grid justify-items-start text-lg mb-2">Product Name : Frock : Girls Casual Frocks</h3>
        //             <div className="grid grid-cols-2 gap-2">
        //                 <input type="text" placeholder="Contact Name" className="input input-bordered w-full max-w-xs" />

        //                 <input type="text" placeholder="Company Name" className="input input-bordered w-full max-w-xs" />
        //                 <input type="text" placeholder="Contact Number" className="input input-bordered w-full max-w-xs" />
        //                 <input type="Email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
        //                 <select className="select select-bordered w-full max-w-xs">
        //                     <option disabled selected>Select Country</option>
        //                     <option>Game of Thrones</option>
        //                     <option>Lost</option>
        //                     <option>Breaking Bad</option>
        //                     <option>Walking Dead</option>
        //                 </select>
        //                 <input type="text" placeholder="City" className="input input-bordered w-full max-w-xs" />
        //             </div>
        //             <p className='grid justify-items-end mt-2 text-primary text-xs'>maximum 1000 character</p>
        //             <textarea className="textarea textarea-bordered mt-3 w-full" placeholder="Describe Your Requirement"></textarea>
        //             <h3 className='grid justify-items-start'>Please send me</h3>
        //             <div className='grid grid-cols-2 gap-2'>
        //                 <div className="form-control grid justify-items-start">
        //                     <label className="label cursor-pointer">
        //                         <input type="checkbox" className="checkbox checkbox-primary" />
        //                         <span className="label-text">
        //                             Sample with specification sheet
        //                         </span>
        //                     </label>
        //                 </div>
        //                 <div className="form-control  grid justify-items-start">
        //                     <label className="label cursor-pointer">
        //                         <input type="checkbox" className="checkbox checkbox-primary" />
        //                         <span className="label-text ms-2">
        //                             Preferred payment terms
        //                         </span>
        //                     </label>
        //                 </div>
        //                 <div className="form-control  grid justify-items-start">
        //                     <label className="label cursor-pointer">
        //                         <input type="checkbox" className="checkbox checkbox-primary" />
        //                         <span className="label-text ms-2">Latest Price Quotation</span>
        //                     </label>
        //                 </div>
        //                 <div className="form-control  grid justify-items-start">
        //                     <label className="label cursor-pointer">
        //                         <input type="checkbox" className="checkbox checkbox-primary" />
        //                         <span className="label-text ms-2">
        //                             Production Capacity</span>
        //                     </label>
        //                 </div>
        //                 <div className="form-control  grid justify-items-start">
        //                     <label className="label cursor-pointer">
        //                         <input type="checkbox" className="checkbox checkbox-primary" />
        //                         <span className="label-text">Compliance certification required</span>
        //                     </label>
        //                 </div>
        //                 <div className="form-control  grid justify-items-start">
        //                     <label className="label cursor-pointer">
        //                         <input type="checkbox" className="checkbox checkbox-primary" />
        //                         <span className="label-text ms-2">Product images</span>
        //                     </label>
        //                 </div>
        //             </div>
        //             <div className='grid grid-cols-2 gap-2'>
        //                 <input type="text" placeholder="Quantity Required" className="input input-bordered w-full max-w-xs" />
        //                 <select className="select select-bordered w-full max-w-xs">
        //                     <option disabled selected>Quantity Unit</option>
        //                     <option>Java</option>
        //                     <option>Go</option>
        //                     <option>C</option>
        //                     <option>C#</option>
        //                     <option>C++</option>
        //                     <option>Rust</option>
        //                     <option>JavaScript</option>
        //                     <option>Python</option>
        //                 </select>
        //             </div>
        //             <div className='grid text-justify mt-2'>
        //                 <span>Update <MdOutlineAttachFile className='text-primary text-xl' /> Attached Files (File Formate:Pdf, xl, doc, docx,xlsx, .txt and Maximum File Size: 5 MB )</span>
        //             </div>
        //             <input type="file" className="file-input mt-3 file-input-bordered w-full " />
        //             <p className='grid justify-items-start mt-3'>By submitting, you agree to our</p>
        //             <button className='bg-sky-400 p-2 text-white mt-2 rounded px-2'>Send Inquire Now</button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Modal;