import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button'; // Certifique-se de que o caminho está correto

const Modal = ({ isOpen, onClose }: any) => {
  if (!isOpen) return null;

  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Checa se o clique foi no background, e não nos elementos filhos
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleBackgroundClick} // Adiciona o manipulador de clique aqui
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-8 rounded shadow-lg max-w-md w-full m-4"
        onClick={(event) => event.stopPropagation()} // Impede que cliques dentro do modal propaguem para o background
      >
        <h2 className="text-xl font-bold text-center">Sobre Fabrício Maciel</h2>
        <p className="text-center text-gray-500 lg:mt-4 text-base xl:text-lg font-medium">
          Meu caminho na medicina começou na Universidade Federal do Maranhão, onde mergulhei no estudo da complexidade humana e na busca pela compreensão das intrincadas peças que formam a vida.
          <br /><br />
          Fiz Genética Médica no Hospital de Clínica de Porto Alegre, onde pude explorar todas as áreas da genética clínica, moldando minha visão sobre como oferecer suporte integral às famílias enfrentando desafios genéticos.
          <br /><br />
          Fortaleci minha paixão pelos mistérios genéticos ao concluir meu mestrado em Neurogenética pela Universidade Federal do Rio Grande do Sul.
          <br /><br />
        </p>
        <Button onClick={onClose}>Fechar</Button>
      </motion.div>
    </div>
  );
};

export default Modal;