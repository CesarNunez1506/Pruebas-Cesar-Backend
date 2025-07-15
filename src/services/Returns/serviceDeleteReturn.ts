import Returns from "../../models/returns";

export const serviceDeleteReturn = async (id: number) => {
    const deletedReturn = await Returns.destroy({ where: { id } });
    if (deletedReturn === 0) {
        throw new Error("Return not found");
    }
    return { message: "Return deleted successfully" };
};
