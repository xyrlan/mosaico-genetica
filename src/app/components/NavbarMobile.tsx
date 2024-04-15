import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { handleScrollToElement } from "./Navbar";
import Image from "next/image";
import LinksComponents from "./LinksComponents";
import CopyCredits from "./CopyCredits";
import AgendarConsulta from "./AgendarConsulta";

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 1, name: 'Início', href: 'hero' },
    { id: 2, name: 'Nosso Especialista', href: 'nosso-especialista' },
    { id: 3, name: 'Serviços', href: 'servicos' },
    { id: 4, name: 'Contato', href: 'contato' },
  ];

  // Define the number of tiles and their animation
  const numTiles = 6;

  const tileVariants = (index: number) => ({
    initial: {
      scaleY: 0,
      originY: index % 2 === 0 ? 0 : 1 // Alternate originY based on the tile's index
    },
    animate: {
      scaleY: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0,
        duration: 0.1,
        ease: "easeInOut"
      }
    }
  });

  return (
    <>
      <div className="flex md:hidden items-center justify-between p-2">
        <button onClick={() => setIsOpen(!isOpen)} className="text-xl">
          &#9776;
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 bg-[#d6e6dc] h-full min-h-screen z-50 p-5 bg-opacity-50"
          >
            {Array.from({ length: numTiles }).map((_, index) => (
              <motion.div
                key={index}
                variants={tileVariants(index)}
                custom={index}
                className="absolute w-full h-full bg-[#f5eaf0] -z-10"
                style={{
                  top: 0,
                  right: `${(100 / numTiles) * index}%`,
                  width: `${100 / numTiles}%`,
                }}
              />
            ))}
            <button onClick={() => setIsOpen(false)} className="absolute top-6 right-5 text-3xl">
              &times; {/* Ícone de fechar */}
            </button>
            <motion.div className="flex flex-col items-center justify-center space-y-8 full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
                exit={{ opacity: 0, y: 20, transition: { duration: 0.1 } }}
              >
                <Image src="/mosaicologo.png" alt="logo" width={200} height={200} />
              </motion.div>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.4 + index * 0.1 } }}
                  exit={{ opacity: 0, y: 20, transition: { duration: 0.1 } }}
                  onClick={() => { handleScrollToElement(item.href); setIsOpen(false); }}
                  className="text-center cursor-pointer font-semibold text-xl text-gray-600"
                >
                  {item.name}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
                exit={{ opacity: 0, y: 20, transition: { duration: 0.1 } }}
                className="absolute bottom-10 w-fit mx-4"
              >
                <AgendarConsulta />
                <LinksComponents />
                <CopyCredits />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavbarMobile;
