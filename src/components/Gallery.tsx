"use client";

import React, { useState } from "react";
import Image from "next/image";
import "@/scss/sections/gallery.scss";
import { GalleryItem } from "@/assets/static/types";
import { defaultGalleryItems } from "@/assets/static/data";
import { MouseIcon, MousePointer2, TextCursorIcon } from "lucide-react";

interface GalleryProps {
  items?: GalleryItem[];
  title?: string;
  subtitle?: string;
}

const Gallery: React.FC<GalleryProps> = ({
  items = defaultGalleryItems,
  title = "Our Gallery",
  subtitle = "Discover our amazing collection of work",
}) => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    "all",
    ...Array.from(new Set(items.map((item) => item.category))),
  ];

  const filteredItems =
    filter === "all" ? items : items.filter((item) => item.category === filter);

  const openModal = (item: GalleryItem) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section className="gallery-section py-5">
        <div className="container">
          {/* Header */}
          <div className="row justify-content-center mb-5">
            <div className="heading text-center">
              <span className="heading__subtitle">Action Plan</span>
              <h2 className="heading__title">Weaving a Sustainable Future</h2>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="row justify-content-center mb-4">
            <div className="col-auto">
              <div className="gallery-filters">
                {categories?.map((category, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`btn btn  action__btn-request  gallery-filter-btn ${
                      filter === category ? "btn__primary" : "btn__secondary"
                    }`}
                    onClick={() => setFilter(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="row g-4">
            {filteredItems.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div className="gallery-item" onClick={() => openModal(item)}>
                  <div className="gallery-image-wrapper">
                    <img
                      src={item.src}
                      alt={item.alt}
                      width={400}
                      height={300}
                      className="gallery-image"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="gallery-overlay">
                      <div className="gallery-overlay-content">
                        {/* <h5 className="gallery-item-title">{item.title}</h5> */}
                        <p className="gallery-item-category">{item.category}</p>
                        <div className="gallery-zoom-icon">
                          <MousePointer2 />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="modal fade show gallery-modal"
          style={{ display: "block" }}
          onClick={closeModal}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title">{selectedImage.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body p-0">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  width={800}
                  height={600}
                  className="w-100"
                  style={{ objectFit: "cover" }}
                />
                {selectedImage.description && (
                  <div className=" desc">
                    <p className="mb-0">{selectedImage.description}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
